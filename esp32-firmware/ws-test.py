import websocket
import threading
import platform
import string
import curses

def to_ascii(bytes):
    return ''.join(chr(b) if b in string.printable.encode() else '.' for b in bytes)

def get_uri():
    if platform.system() == "Windows":
        hostname = "balancebot"
    else:
        hostname = "balancebot.local"
    uri = f"ws://{hostname}/ws"
    return uri

def on_message(ws, message):
    global message_win
    message_win.addstr(to_ascii(message) + '\n')
    message_win.refresh()

def on_error(ws, error):
    global message_win
    message_win.addstr(to_ascii(error) + '\n')
    message_win.refresh()

def on_close(ws, _a, _b):
    global message_win
    message_win.addstr("### closed ###\n")
    message_win.refresh()

def on_open(ws):
    def run(*args):
        global input_win
        while True:
            input_win.clear()
            input_win.addstr(0, 0, "Enter message to send: ")
            input_win.refresh()
            message = input_win.getstr(0, 23, 60)
            ws.send(message)

    threading.Thread(target=run).start()

if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp(get_uri(),
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close)
    ws.on_open = on_open
    stdscr = curses.initscr()
    curses.echo()
    curses.cbreak()
    stdscr.keypad(True)
    message_win = curses.newwin(curses.LINES - 1, curses.COLS, 0, 0)
    input_win = curses.newwin(1, curses.COLS, curses.LINES - 1, 0)
    try:
        ws.run_forever()
    finally:
        curses.nocbreak()
        stdscr.keypad(False)
        curses.noecho()
        curses.endwin()