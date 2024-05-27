import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a Response. */
export interface IResponse {

    /** Response requestId */
    requestId?: (number|null);

    /** Response result */
    result?: (Response.IResult|null);

    /** Response enableBalancing */
    enableBalancing?: (boolean|null);

    /** Response pitchControllerParams */
    pitchControllerParams?: (controllers.pitch.IParams|null);

    /** Response pitchControllerActive */
    pitchControllerActive?: (controllers.pitch.Type|null);

    /** Response yawControllerParams */
    yawControllerParams?: (controllers.yaw.IParams|null);

    /** Response yawControllerActive */
    yawControllerActive?: (controllers.yaw.Type|null);

    /** Response physicalCharacteristics */
    physicalCharacteristics?: (physical.ICharacteristics|null);

    /** Response motorCalibrationLut */
    motorCalibrationLut?: (motor_calib.ILUT|null);

    /** Response motorCalibrationResult */
    motorCalibrationResult?: (motor_calib.IResult|null);
}

/** Represents a Response. */
export class Response implements IResponse {

    /**
     * Constructs a new Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponse);

    /** Response requestId. */
    public requestId: number;

    /** Response result. */
    public result?: (Response.IResult|null);

    /** Response enableBalancing. */
    public enableBalancing?: (boolean|null);

    /** Response pitchControllerParams. */
    public pitchControllerParams?: (controllers.pitch.IParams|null);

    /** Response pitchControllerActive. */
    public pitchControllerActive?: (controllers.pitch.Type|null);

    /** Response yawControllerParams. */
    public yawControllerParams?: (controllers.yaw.IParams|null);

    /** Response yawControllerActive. */
    public yawControllerActive?: (controllers.yaw.Type|null);

    /** Response physicalCharacteristics. */
    public physicalCharacteristics?: (physical.ICharacteristics|null);

    /** Response motorCalibrationLut. */
    public motorCalibrationLut?: (motor_calib.ILUT|null);

    /** Response motorCalibrationResult. */
    public motorCalibrationResult?: (motor_calib.IResult|null);

    /** Response _enableBalancing. */
    public _enableBalancing?: "enableBalancing";

    /** Response _pitchControllerParams. */
    public _pitchControllerParams?: "pitchControllerParams";

    /** Response _pitchControllerActive. */
    public _pitchControllerActive?: "pitchControllerActive";

    /** Response _yawControllerParams. */
    public _yawControllerParams?: "yawControllerParams";

    /** Response _yawControllerActive. */
    public _yawControllerActive?: "yawControllerActive";

    /** Response _physicalCharacteristics. */
    public _physicalCharacteristics?: "physicalCharacteristics";

    /** Response _motorCalibrationLut. */
    public _motorCalibrationLut?: "motorCalibrationLut";

    /** Response _motorCalibrationResult. */
    public _motorCalibrationResult?: "motorCalibrationResult";

    /**
     * Creates a new Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Response instance
     */
    public static create(properties?: IResponse): Response;

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Response;

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Response;

    /**
     * Verifies a Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Response
     */
    public static fromObject(object: { [k: string]: any }): Response;

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @param message Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Response {

    /** Properties of a Result. */
    interface IResult {

        /** Result code */
        code?: (Response.Result.Code|null);

        /** Result msg */
        msg?: (string|null);
    }

    /** Represents a Result. */
    class Result implements IResult {

        /**
         * Constructs a new Result.
         * @param [properties] Properties to set
         */
        constructor(properties?: Response.IResult);

        /** Result code. */
        public code: Response.Result.Code;

        /** Result msg. */
        public msg?: (string|null);

        /** Result _msg. */
        public _msg?: "msg";

        /**
         * Creates a new Result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Result instance
         */
        public static create(properties?: Response.IResult): Response.Result;

        /**
         * Encodes the specified Result message. Does not implicitly {@link Response.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Response.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link Response.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Response.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Response.Result;

        /**
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Response.Result;

        /**
         * Verifies a Result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Result
         */
        public static fromObject(object: { [k: string]: any }): Response.Result;

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @param message Result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Response.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Result
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    namespace Result {

        /** Code enum. */
        enum Code {
            OK = 0,
            ERR_UNKNOWN = 1
        }
    }
}

/** Properties of a RobotState. */
export interface IRobotState {

    /** RobotState timestamp */
    timestamp?: (google.protobuf.ITimestamp|null);

    /** RobotState pitch */
    pitch?: (number|null);

    /** RobotState yaw */
    yaw?: (number|null);

    /** RobotState pitchRate */
    pitchRate?: (number|null);

    /** RobotState yawRate */
    yawRate?: (number|null);

    /** RobotState leftMotorAngle */
    leftMotorAngle?: (number|null);

    /** RobotState rightMotorAngle */
    rightMotorAngle?: (number|null);

    /** RobotState leftMotorSpeed */
    leftMotorSpeed?: (number|null);

    /** RobotState rightMotorSpeed */
    rightMotorSpeed?: (number|null);

    /** RobotState pitchControllerState */
    pitchControllerState?: (controllers.pitch.IState|null);

    /** RobotState yawControllerState */
    yawControllerState?: (controllers.yaw.IState|null);
}

/** Represents a RobotState. */
export class RobotState implements IRobotState {

    /**
     * Constructs a new RobotState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRobotState);

    /** RobotState timestamp. */
    public timestamp?: (google.protobuf.ITimestamp|null);

    /** RobotState pitch. */
    public pitch: number;

    /** RobotState yaw. */
    public yaw: number;

    /** RobotState pitchRate. */
    public pitchRate: number;

    /** RobotState yawRate. */
    public yawRate: number;

    /** RobotState leftMotorAngle. */
    public leftMotorAngle: number;

    /** RobotState rightMotorAngle. */
    public rightMotorAngle: number;

    /** RobotState leftMotorSpeed. */
    public leftMotorSpeed: number;

    /** RobotState rightMotorSpeed. */
    public rightMotorSpeed: number;

    /** RobotState pitchControllerState. */
    public pitchControllerState?: (controllers.pitch.IState|null);

    /** RobotState yawControllerState. */
    public yawControllerState?: (controllers.yaw.IState|null);

    /**
     * Creates a new RobotState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RobotState instance
     */
    public static create(properties?: IRobotState): RobotState;

    /**
     * Encodes the specified RobotState message. Does not implicitly {@link RobotState.verify|verify} messages.
     * @param message RobotState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRobotState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RobotState message, length delimited. Does not implicitly {@link RobotState.verify|verify} messages.
     * @param message RobotState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRobotState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RobotState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RobotState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RobotState;

    /**
     * Decodes a RobotState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RobotState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RobotState;

    /**
     * Verifies a RobotState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RobotState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RobotState
     */
    public static fromObject(object: { [k: string]: any }): RobotState;

    /**
     * Creates a plain object from a RobotState message. Also converts values to other types if specified.
     * @param message RobotState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RobotState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RobotState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RobotState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Log. */
export interface ILog {

    /** Log level */
    level?: (Log.Level|null);

    /** Log message */
    message?: (string|null);
}

/** Represents a Log. */
export class Log implements ILog {

    /**
     * Constructs a new Log.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILog);

    /** Log level. */
    public level: Log.Level;

    /** Log message. */
    public message: string;

    /**
     * Creates a new Log instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Log instance
     */
    public static create(properties?: ILog): Log;

    /**
     * Encodes the specified Log message. Does not implicitly {@link Log.verify|verify} messages.
     * @param message Log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Log message, length delimited. Does not implicitly {@link Log.verify|verify} messages.
     * @param message Log message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILog, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Log message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Log;

    /**
     * Decodes a Log message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Log
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Log;

    /**
     * Verifies a Log message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Log message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Log
     */
    public static fromObject(object: { [k: string]: any }): Log;

    /**
     * Creates a plain object from a Log message. Also converts values to other types if specified.
     * @param message Log
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Log, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Log to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Log
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace Log {

    /** Level enum. */
    enum Level {
        DEBUG = 0,
        INFO = 1,
        WARN = 2,
        ERROR = 3
    }
}

/** Properties of a Message. */
export interface IMessage {

    /** Message id */
    id?: (number|null);

    /** Message response */
    response?: (IResponse|null);

    /** Message readCurrentReg */
    readCurrentReg?: (registers.IReadCurrent|null);

    /** Message readSavedReg */
    readSavedReg?: (registers.IReadSaved|null);

    /** Message writeCurrentReg */
    writeCurrentReg?: (registers.IWriteCurrent|null);

    /** Message saveCurrentReg */
    saveCurrentReg?: (registers.ISaveCurrent|null);

    /** Message calibrateMotors */
    calibrateMotors?: (google.protobuf.IEmpty|null);

    /** Message robotState */
    robotState?: (IRobotState|null);

    /** Message log */
    log?: (ILog|null);

    /** Message readAllRegs */
    readAllRegs?: (google.protobuf.IEmpty|null);
}

/** Represents a Message. */
export class Message implements IMessage {

    /**
     * Constructs a new Message.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMessage);

    /** Message id. */
    public id: number;

    /** Message response. */
    public response?: (IResponse|null);

    /** Message readCurrentReg. */
    public readCurrentReg?: (registers.IReadCurrent|null);

    /** Message readSavedReg. */
    public readSavedReg?: (registers.IReadSaved|null);

    /** Message writeCurrentReg. */
    public writeCurrentReg?: (registers.IWriteCurrent|null);

    /** Message saveCurrentReg. */
    public saveCurrentReg?: (registers.ISaveCurrent|null);

    /** Message calibrateMotors. */
    public calibrateMotors?: (google.protobuf.IEmpty|null);

    /** Message robotState. */
    public robotState?: (IRobotState|null);

    /** Message log. */
    public log?: (ILog|null);

    /** Message readAllRegs. */
    public readAllRegs?: (google.protobuf.IEmpty|null);

    /** Message payload. */
    public payload?: ("response"|"readCurrentReg"|"readSavedReg"|"writeCurrentReg"|"saveCurrentReg"|"calibrateMotors"|"robotState"|"log"|"readAllRegs");

    /**
     * Creates a new Message instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Message instance
     */
    public static create(properties?: IMessage): Message;

    /**
     * Encodes the specified Message message. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Message message, length delimited. Does not implicitly {@link Message.verify|verify} messages.
     * @param message Message message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Message message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Message;

    /**
     * Decodes a Message message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Message
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Message;

    /**
     * Verifies a Message message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Message message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Message
     */
    public static fromObject(object: { [k: string]: any }): Message;

    /**
     * Creates a plain object from a Message message. Also converts values to other types if specified.
     * @param message Message
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Message to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Message
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Namespace registers. */
export namespace registers {

    /** Register enum. */
    enum Register {
        ENABLE_BALANCING = 0,
        PITCH_CONTROLLER_PARAMS = 1,
        PITCH_CONTROLLER_ACTIVE = 2,
        YAW_CONTROLLER_PARAMS = 3,
        YAW_CONTROLLER_ACTIVE = 4,
        PHYSICAL_CHARACTERSTICS = 5,
        MOTOR_CALIBRATION_LUT = 6
    }

    /** Properties of a ReadCurrent. */
    interface IReadCurrent {

        /** ReadCurrent reg */
        reg?: (registers.Register|null);
    }

    /** Represents a ReadCurrent. */
    class ReadCurrent implements IReadCurrent {

        /**
         * Constructs a new ReadCurrent.
         * @param [properties] Properties to set
         */
        constructor(properties?: registers.IReadCurrent);

        /** ReadCurrent reg. */
        public reg: registers.Register;

        /**
         * Creates a new ReadCurrent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadCurrent instance
         */
        public static create(properties?: registers.IReadCurrent): registers.ReadCurrent;

        /**
         * Encodes the specified ReadCurrent message. Does not implicitly {@link registers.ReadCurrent.verify|verify} messages.
         * @param message ReadCurrent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: registers.IReadCurrent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadCurrent message, length delimited. Does not implicitly {@link registers.ReadCurrent.verify|verify} messages.
         * @param message ReadCurrent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: registers.IReadCurrent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadCurrent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registers.ReadCurrent;

        /**
         * Decodes a ReadCurrent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registers.ReadCurrent;

        /**
         * Verifies a ReadCurrent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadCurrent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadCurrent
         */
        public static fromObject(object: { [k: string]: any }): registers.ReadCurrent;

        /**
         * Creates a plain object from a ReadCurrent message. Also converts values to other types if specified.
         * @param message ReadCurrent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: registers.ReadCurrent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadCurrent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadCurrent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a ReadSaved. */
    interface IReadSaved {

        /** ReadSaved reg */
        reg?: (registers.Register|null);
    }

    /** Represents a ReadSaved. */
    class ReadSaved implements IReadSaved {

        /**
         * Constructs a new ReadSaved.
         * @param [properties] Properties to set
         */
        constructor(properties?: registers.IReadSaved);

        /** ReadSaved reg. */
        public reg: registers.Register;

        /**
         * Creates a new ReadSaved instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReadSaved instance
         */
        public static create(properties?: registers.IReadSaved): registers.ReadSaved;

        /**
         * Encodes the specified ReadSaved message. Does not implicitly {@link registers.ReadSaved.verify|verify} messages.
         * @param message ReadSaved message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: registers.IReadSaved, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReadSaved message, length delimited. Does not implicitly {@link registers.ReadSaved.verify|verify} messages.
         * @param message ReadSaved message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: registers.IReadSaved, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReadSaved message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReadSaved
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registers.ReadSaved;

        /**
         * Decodes a ReadSaved message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReadSaved
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registers.ReadSaved;

        /**
         * Verifies a ReadSaved message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReadSaved message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReadSaved
         */
        public static fromObject(object: { [k: string]: any }): registers.ReadSaved;

        /**
         * Creates a plain object from a ReadSaved message. Also converts values to other types if specified.
         * @param message ReadSaved
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: registers.ReadSaved, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReadSaved to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ReadSaved
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a WriteCurrent. */
    interface IWriteCurrent {

        /** WriteCurrent enableBalancing */
        enableBalancing?: (boolean|null);

        /** WriteCurrent pitchControllerParams */
        pitchControllerParams?: (controllers.pitch.IParams|null);

        /** WriteCurrent pitchControllerActive */
        pitchControllerActive?: (controllers.pitch.Type|null);

        /** WriteCurrent yawControllerParams */
        yawControllerParams?: (controllers.yaw.IParams|null);

        /** WriteCurrent yawControllerActive */
        yawControllerActive?: (controllers.yaw.Type|null);

        /** WriteCurrent physicalCharacteristics */
        physicalCharacteristics?: (physical.ICharacteristics|null);

        /** WriteCurrent motorCalibrationLut */
        motorCalibrationLut?: (motor_calib.ILUT|null);
    }

    /** Represents a WriteCurrent. */
    class WriteCurrent implements IWriteCurrent {

        /**
         * Constructs a new WriteCurrent.
         * @param [properties] Properties to set
         */
        constructor(properties?: registers.IWriteCurrent);

        /** WriteCurrent enableBalancing. */
        public enableBalancing?: (boolean|null);

        /** WriteCurrent pitchControllerParams. */
        public pitchControllerParams?: (controllers.pitch.IParams|null);

        /** WriteCurrent pitchControllerActive. */
        public pitchControllerActive?: (controllers.pitch.Type|null);

        /** WriteCurrent yawControllerParams. */
        public yawControllerParams?: (controllers.yaw.IParams|null);

        /** WriteCurrent yawControllerActive. */
        public yawControllerActive?: (controllers.yaw.Type|null);

        /** WriteCurrent physicalCharacteristics. */
        public physicalCharacteristics?: (physical.ICharacteristics|null);

        /** WriteCurrent motorCalibrationLut. */
        public motorCalibrationLut?: (motor_calib.ILUT|null);

        /** WriteCurrent data. */
        public data?: ("enableBalancing"|"pitchControllerParams"|"pitchControllerActive"|"yawControllerParams"|"yawControllerActive"|"physicalCharacteristics"|"motorCalibrationLut");

        /**
         * Creates a new WriteCurrent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WriteCurrent instance
         */
        public static create(properties?: registers.IWriteCurrent): registers.WriteCurrent;

        /**
         * Encodes the specified WriteCurrent message. Does not implicitly {@link registers.WriteCurrent.verify|verify} messages.
         * @param message WriteCurrent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: registers.IWriteCurrent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WriteCurrent message, length delimited. Does not implicitly {@link registers.WriteCurrent.verify|verify} messages.
         * @param message WriteCurrent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: registers.IWriteCurrent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WriteCurrent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WriteCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registers.WriteCurrent;

        /**
         * Decodes a WriteCurrent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WriteCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registers.WriteCurrent;

        /**
         * Verifies a WriteCurrent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WriteCurrent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WriteCurrent
         */
        public static fromObject(object: { [k: string]: any }): registers.WriteCurrent;

        /**
         * Creates a plain object from a WriteCurrent message. Also converts values to other types if specified.
         * @param message WriteCurrent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: registers.WriteCurrent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WriteCurrent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for WriteCurrent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a SaveCurrent. */
    interface ISaveCurrent {

        /** SaveCurrent reg */
        reg?: (registers.Register|null);
    }

    /** Represents a SaveCurrent. */
    class SaveCurrent implements ISaveCurrent {

        /**
         * Constructs a new SaveCurrent.
         * @param [properties] Properties to set
         */
        constructor(properties?: registers.ISaveCurrent);

        /** SaveCurrent reg. */
        public reg: registers.Register;

        /**
         * Creates a new SaveCurrent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SaveCurrent instance
         */
        public static create(properties?: registers.ISaveCurrent): registers.SaveCurrent;

        /**
         * Encodes the specified SaveCurrent message. Does not implicitly {@link registers.SaveCurrent.verify|verify} messages.
         * @param message SaveCurrent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: registers.ISaveCurrent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SaveCurrent message, length delimited. Does not implicitly {@link registers.SaveCurrent.verify|verify} messages.
         * @param message SaveCurrent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: registers.ISaveCurrent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SaveCurrent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SaveCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registers.SaveCurrent;

        /**
         * Decodes a SaveCurrent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SaveCurrent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registers.SaveCurrent;

        /**
         * Verifies a SaveCurrent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SaveCurrent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SaveCurrent
         */
        public static fromObject(object: { [k: string]: any }): registers.SaveCurrent;

        /**
         * Creates a plain object from a SaveCurrent message. Also converts values to other types if specified.
         * @param message SaveCurrent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: registers.SaveCurrent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SaveCurrent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for SaveCurrent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace controllers. */
export namespace controllers {

    /** Namespace pitch. */
    namespace pitch {

        /** Properties of a Params. */
        interface IParams {

            /** Params pid */
            pid?: (controllers.pitch.Params.IPID|null);
        }

        /** Represents a Params. */
        class Params implements IParams {

            /**
             * Constructs a new Params.
             * @param [properties] Properties to set
             */
            constructor(properties?: controllers.pitch.IParams);

            /** Params pid. */
            public pid?: (controllers.pitch.Params.IPID|null);

            /** Params _pid. */
            public _pid?: "pid";

            /**
             * Creates a new Params instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Params instance
             */
            public static create(properties?: controllers.pitch.IParams): controllers.pitch.Params;

            /**
             * Encodes the specified Params message. Does not implicitly {@link controllers.pitch.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: controllers.pitch.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link controllers.pitch.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: controllers.pitch.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Params message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controllers.pitch.Params;

            /**
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): controllers.pitch.Params;

            /**
             * Verifies a Params message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Params message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Params
             */
            public static fromObject(object: { [k: string]: any }): controllers.pitch.Params;

            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @param message Params
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: controllers.pitch.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Params to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Params
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Params {

            /** Properties of a PID. */
            interface IPID {

                /** PID base */
                base?: (controllers.IParamsPID|null);

                /** PID addGravity */
                addGravity?: (boolean|null);
            }

            /** Represents a PID. */
            class PID implements IPID {

                /**
                 * Constructs a new PID.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: controllers.pitch.Params.IPID);

                /** PID base. */
                public base?: (controllers.IParamsPID|null);

                /** PID addGravity. */
                public addGravity: boolean;

                /**
                 * Creates a new PID instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PID instance
                 */
                public static create(properties?: controllers.pitch.Params.IPID): controllers.pitch.Params.PID;

                /**
                 * Encodes the specified PID message. Does not implicitly {@link controllers.pitch.Params.PID.verify|verify} messages.
                 * @param message PID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: controllers.pitch.Params.IPID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PID message, length delimited. Does not implicitly {@link controllers.pitch.Params.PID.verify|verify} messages.
                 * @param message PID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: controllers.pitch.Params.IPID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PID message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controllers.pitch.Params.PID;

                /**
                 * Decodes a PID message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): controllers.pitch.Params.PID;

                /**
                 * Verifies a PID message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PID message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PID
                 */
                public static fromObject(object: { [k: string]: any }): controllers.pitch.Params.PID;

                /**
                 * Creates a plain object from a PID message. Also converts values to other types if specified.
                 * @param message PID
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: controllers.pitch.Params.PID, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PID to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PID
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a State. */
        interface IState {

            /** State pid */
            pid?: (controllers.pitch.State.IPID|null);
        }

        /** Represents a State. */
        class State implements IState {

            /**
             * Constructs a new State.
             * @param [properties] Properties to set
             */
            constructor(properties?: controllers.pitch.IState);

            /** State pid. */
            public pid?: (controllers.pitch.State.IPID|null);

            /** State active. */
            public active?: "pid";

            /**
             * Creates a new State instance using the specified properties.
             * @param [properties] Properties to set
             * @returns State instance
             */
            public static create(properties?: controllers.pitch.IState): controllers.pitch.State;

            /**
             * Encodes the specified State message. Does not implicitly {@link controllers.pitch.State.verify|verify} messages.
             * @param message State message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: controllers.pitch.IState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified State message, length delimited. Does not implicitly {@link controllers.pitch.State.verify|verify} messages.
             * @param message State message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: controllers.pitch.IState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a State message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controllers.pitch.State;

            /**
             * Decodes a State message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): controllers.pitch.State;

            /**
             * Verifies a State message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a State message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns State
             */
            public static fromObject(object: { [k: string]: any }): controllers.pitch.State;

            /**
             * Creates a plain object from a State message. Also converts values to other types if specified.
             * @param message State
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: controllers.pitch.State, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this State to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for State
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace State {

            /** Properties of a PID. */
            interface IPID {

                /** PID base */
                base?: (controllers.IStatePID|null);
            }

            /** Represents a PID. */
            class PID implements IPID {

                /**
                 * Constructs a new PID.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: controllers.pitch.State.IPID);

                /** PID base. */
                public base?: (controllers.IStatePID|null);

                /**
                 * Creates a new PID instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PID instance
                 */
                public static create(properties?: controllers.pitch.State.IPID): controllers.pitch.State.PID;

                /**
                 * Encodes the specified PID message. Does not implicitly {@link controllers.pitch.State.PID.verify|verify} messages.
                 * @param message PID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: controllers.pitch.State.IPID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PID message, length delimited. Does not implicitly {@link controllers.pitch.State.PID.verify|verify} messages.
                 * @param message PID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: controllers.pitch.State.IPID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PID message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controllers.pitch.State.PID;

                /**
                 * Decodes a PID message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): controllers.pitch.State.PID;

                /**
                 * Verifies a PID message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PID message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PID
                 */
                public static fromObject(object: { [k: string]: any }): controllers.pitch.State.PID;

                /**
                 * Creates a plain object from a PID message. Also converts values to other types if specified.
                 * @param message PID
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: controllers.pitch.State.PID, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PID to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PID
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Type enum. */
        enum Type {
            PID = 0
        }
    }

    /** Properties of a ParamsPID. */
    interface IParamsPID {

        /** ParamsPID kp */
        kp?: (number|null);

        /** ParamsPID ki */
        ki?: (number|null);

        /** ParamsPID kd */
        kd?: (number|null);

        /** ParamsPID kf */
        kf?: (number|null);

        /** ParamsPID integralZeroThreshold */
        integralZeroThreshold?: (number|null);

        /** ParamsPID integralSaturationLimit */
        integralSaturationLimit?: (number|null);

        /** ParamsPID resetIntegral */
        resetIntegral?: (boolean|null);
    }

    /** Represents a ParamsPID. */
    class ParamsPID implements IParamsPID {

        /**
         * Constructs a new ParamsPID.
         * @param [properties] Properties to set
         */
        constructor(properties?: controllers.IParamsPID);

        /** ParamsPID kp. */
        public kp: number;

        /** ParamsPID ki. */
        public ki: number;

        /** ParamsPID kd. */
        public kd: number;

        /** ParamsPID kf. */
        public kf: number;

        /** ParamsPID integralZeroThreshold. */
        public integralZeroThreshold: number;

        /** ParamsPID integralSaturationLimit. */
        public integralSaturationLimit: number;

        /** ParamsPID resetIntegral. */
        public resetIntegral: boolean;

        /**
         * Creates a new ParamsPID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ParamsPID instance
         */
        public static create(properties?: controllers.IParamsPID): controllers.ParamsPID;

        /**
         * Encodes the specified ParamsPID message. Does not implicitly {@link controllers.ParamsPID.verify|verify} messages.
         * @param message ParamsPID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: controllers.IParamsPID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ParamsPID message, length delimited. Does not implicitly {@link controllers.ParamsPID.verify|verify} messages.
         * @param message ParamsPID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: controllers.IParamsPID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ParamsPID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ParamsPID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controllers.ParamsPID;

        /**
         * Decodes a ParamsPID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ParamsPID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): controllers.ParamsPID;

        /**
         * Verifies a ParamsPID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ParamsPID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ParamsPID
         */
        public static fromObject(object: { [k: string]: any }): controllers.ParamsPID;

        /**
         * Creates a plain object from a ParamsPID message. Also converts values to other types if specified.
         * @param message ParamsPID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: controllers.ParamsPID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ParamsPID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ParamsPID
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a StatePID. */
    interface IStatePID {

        /** StatePID error */
        error?: (number|null);

        /** StatePID integral */
        integral?: (number|null);

        /** StatePID derivative */
        derivative?: (number|null);

        /** StatePID output */
        output?: (number|null);

        /** StatePID saturated */
        saturated?: (boolean|null);
    }

    /** Represents a StatePID. */
    class StatePID implements IStatePID {

        /**
         * Constructs a new StatePID.
         * @param [properties] Properties to set
         */
        constructor(properties?: controllers.IStatePID);

        /** StatePID error. */
        public error: number;

        /** StatePID integral. */
        public integral: number;

        /** StatePID derivative. */
        public derivative: number;

        /** StatePID output. */
        public output: number;

        /** StatePID saturated. */
        public saturated: boolean;

        /**
         * Creates a new StatePID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatePID instance
         */
        public static create(properties?: controllers.IStatePID): controllers.StatePID;

        /**
         * Encodes the specified StatePID message. Does not implicitly {@link controllers.StatePID.verify|verify} messages.
         * @param message StatePID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: controllers.IStatePID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatePID message, length delimited. Does not implicitly {@link controllers.StatePID.verify|verify} messages.
         * @param message StatePID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: controllers.IStatePID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatePID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StatePID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controllers.StatePID;

        /**
         * Decodes a StatePID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StatePID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): controllers.StatePID;

        /**
         * Verifies a StatePID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatePID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatePID
         */
        public static fromObject(object: { [k: string]: any }): controllers.StatePID;

        /**
         * Creates a plain object from a StatePID message. Also converts values to other types if specified.
         * @param message StatePID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: controllers.StatePID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatePID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for StatePID
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Namespace yaw. */
    namespace yaw {

        /** Properties of a Params. */
        interface IParams {

            /** Params pid */
            pid?: (controllers.yaw.Params.IPID|null);
        }

        /** Represents a Params. */
        class Params implements IParams {

            /**
             * Constructs a new Params.
             * @param [properties] Properties to set
             */
            constructor(properties?: controllers.yaw.IParams);

            /** Params pid. */
            public pid?: (controllers.yaw.Params.IPID|null);

            /** Params _pid. */
            public _pid?: "pid";

            /**
             * Creates a new Params instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Params instance
             */
            public static create(properties?: controllers.yaw.IParams): controllers.yaw.Params;

            /**
             * Encodes the specified Params message. Does not implicitly {@link controllers.yaw.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: controllers.yaw.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Params message, length delimited. Does not implicitly {@link controllers.yaw.Params.verify|verify} messages.
             * @param message Params message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: controllers.yaw.IParams, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Params message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controllers.yaw.Params;

            /**
             * Decodes a Params message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Params
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): controllers.yaw.Params;

            /**
             * Verifies a Params message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Params message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Params
             */
            public static fromObject(object: { [k: string]: any }): controllers.yaw.Params;

            /**
             * Creates a plain object from a Params message. Also converts values to other types if specified.
             * @param message Params
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: controllers.yaw.Params, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Params to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Params
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace Params {

            /** Properties of a PID. */
            interface IPID {

                /** PID base */
                base?: (controllers.IParamsPID|null);
            }

            /** Represents a PID. */
            class PID implements IPID {

                /**
                 * Constructs a new PID.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: controllers.yaw.Params.IPID);

                /** PID base. */
                public base?: (controllers.IParamsPID|null);

                /**
                 * Creates a new PID instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PID instance
                 */
                public static create(properties?: controllers.yaw.Params.IPID): controllers.yaw.Params.PID;

                /**
                 * Encodes the specified PID message. Does not implicitly {@link controllers.yaw.Params.PID.verify|verify} messages.
                 * @param message PID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: controllers.yaw.Params.IPID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PID message, length delimited. Does not implicitly {@link controllers.yaw.Params.PID.verify|verify} messages.
                 * @param message PID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: controllers.yaw.Params.IPID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PID message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controllers.yaw.Params.PID;

                /**
                 * Decodes a PID message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): controllers.yaw.Params.PID;

                /**
                 * Verifies a PID message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PID message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PID
                 */
                public static fromObject(object: { [k: string]: any }): controllers.yaw.Params.PID;

                /**
                 * Creates a plain object from a PID message. Also converts values to other types if specified.
                 * @param message PID
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: controllers.yaw.Params.PID, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PID to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PID
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a State. */
        interface IState {

            /** State pid */
            pid?: (controllers.yaw.State.IPID|null);
        }

        /** Represents a State. */
        class State implements IState {

            /**
             * Constructs a new State.
             * @param [properties] Properties to set
             */
            constructor(properties?: controllers.yaw.IState);

            /** State pid. */
            public pid?: (controllers.yaw.State.IPID|null);

            /** State active. */
            public active?: "pid";

            /**
             * Creates a new State instance using the specified properties.
             * @param [properties] Properties to set
             * @returns State instance
             */
            public static create(properties?: controllers.yaw.IState): controllers.yaw.State;

            /**
             * Encodes the specified State message. Does not implicitly {@link controllers.yaw.State.verify|verify} messages.
             * @param message State message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: controllers.yaw.IState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified State message, length delimited. Does not implicitly {@link controllers.yaw.State.verify|verify} messages.
             * @param message State message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: controllers.yaw.IState, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a State message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controllers.yaw.State;

            /**
             * Decodes a State message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns State
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): controllers.yaw.State;

            /**
             * Verifies a State message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a State message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns State
             */
            public static fromObject(object: { [k: string]: any }): controllers.yaw.State;

            /**
             * Creates a plain object from a State message. Also converts values to other types if specified.
             * @param message State
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: controllers.yaw.State, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this State to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for State
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace State {

            /** Properties of a PID. */
            interface IPID {

                /** PID base */
                base?: (controllers.IStatePID|null);
            }

            /** Represents a PID. */
            class PID implements IPID {

                /**
                 * Constructs a new PID.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: controllers.yaw.State.IPID);

                /** PID base. */
                public base?: (controllers.IStatePID|null);

                /**
                 * Creates a new PID instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PID instance
                 */
                public static create(properties?: controllers.yaw.State.IPID): controllers.yaw.State.PID;

                /**
                 * Encodes the specified PID message. Does not implicitly {@link controllers.yaw.State.PID.verify|verify} messages.
                 * @param message PID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: controllers.yaw.State.IPID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PID message, length delimited. Does not implicitly {@link controllers.yaw.State.PID.verify|verify} messages.
                 * @param message PID message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: controllers.yaw.State.IPID, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PID message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): controllers.yaw.State.PID;

                /**
                 * Decodes a PID message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PID
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): controllers.yaw.State.PID;

                /**
                 * Verifies a PID message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PID message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PID
                 */
                public static fromObject(object: { [k: string]: any }): controllers.yaw.State.PID;

                /**
                 * Creates a plain object from a PID message. Also converts values to other types if specified.
                 * @param message PID
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: controllers.yaw.State.PID, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PID to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for PID
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Type enum. */
        enum Type {
            PID = 0
        }
    }
}

/** Namespace physical. */
export namespace physical {

    /** Properties of a Characteristics. */
    interface ICharacteristics {

        /** Characteristics wheelRadius */
        wheelRadius?: (number|null);

        /** Characteristics wheelBase */
        wheelBase?: (number|null);

        /** Characteristics motorMaxSpeed */
        motorMaxSpeed?: (number|null);

        /** Characteristics gravity */
        gravity?: (number|null);

        /** Characteristics torqueLength */
        torqueLength?: (number|null);
    }

    /** Represents a Characteristics. */
    class Characteristics implements ICharacteristics {

        /**
         * Constructs a new Characteristics.
         * @param [properties] Properties to set
         */
        constructor(properties?: physical.ICharacteristics);

        /** Characteristics wheelRadius. */
        public wheelRadius: number;

        /** Characteristics wheelBase. */
        public wheelBase: number;

        /** Characteristics motorMaxSpeed. */
        public motorMaxSpeed: number;

        /** Characteristics gravity. */
        public gravity: number;

        /** Characteristics torqueLength. */
        public torqueLength: number;

        /**
         * Creates a new Characteristics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Characteristics instance
         */
        public static create(properties?: physical.ICharacteristics): physical.Characteristics;

        /**
         * Encodes the specified Characteristics message. Does not implicitly {@link physical.Characteristics.verify|verify} messages.
         * @param message Characteristics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: physical.ICharacteristics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Characteristics message, length delimited. Does not implicitly {@link physical.Characteristics.verify|verify} messages.
         * @param message Characteristics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: physical.ICharacteristics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Characteristics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Characteristics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): physical.Characteristics;

        /**
         * Decodes a Characteristics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Characteristics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): physical.Characteristics;

        /**
         * Verifies a Characteristics message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Characteristics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Characteristics
         */
        public static fromObject(object: { [k: string]: any }): physical.Characteristics;

        /**
         * Creates a plain object from a Characteristics message. Also converts values to other types if specified.
         * @param message Characteristics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: physical.Characteristics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Characteristics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Characteristics
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace motor_calib. */
export namespace motor_calib {

    /** Properties of a Measurements. */
    interface IMeasurements {

        /** Measurements pwm */
        pwm?: (number[]|null);

        /** Measurements speedL */
        speedL?: (number[]|null);

        /** Measurements speedR */
        speedR?: (number[]|null);
    }

    /** Represents a Measurements. */
    class Measurements implements IMeasurements {

        /**
         * Constructs a new Measurements.
         * @param [properties] Properties to set
         */
        constructor(properties?: motor_calib.IMeasurements);

        /** Measurements pwm. */
        public pwm: number[];

        /** Measurements speedL. */
        public speedL: number[];

        /** Measurements speedR. */
        public speedR: number[];

        /**
         * Creates a new Measurements instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Measurements instance
         */
        public static create(properties?: motor_calib.IMeasurements): motor_calib.Measurements;

        /**
         * Encodes the specified Measurements message. Does not implicitly {@link motor_calib.Measurements.verify|verify} messages.
         * @param message Measurements message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: motor_calib.IMeasurements, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Measurements message, length delimited. Does not implicitly {@link motor_calib.Measurements.verify|verify} messages.
         * @param message Measurements message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: motor_calib.IMeasurements, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Measurements message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Measurements
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): motor_calib.Measurements;

        /**
         * Decodes a Measurements message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Measurements
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): motor_calib.Measurements;

        /**
         * Verifies a Measurements message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Measurements message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Measurements
         */
        public static fromObject(object: { [k: string]: any }): motor_calib.Measurements;

        /**
         * Creates a plain object from a Measurements message. Also converts values to other types if specified.
         * @param message Measurements
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: motor_calib.Measurements, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Measurements to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Measurements
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a LUT. */
    interface ILUT {

        /** LUT rpm */
        rpm?: (number[]|null);

        /** LUT pwmL */
        pwmL?: (number[]|null);

        /** LUT pwmR */
        pwmR?: (number[]|null);
    }

    /** Represents a LUT. */
    class LUT implements ILUT {

        /**
         * Constructs a new LUT.
         * @param [properties] Properties to set
         */
        constructor(properties?: motor_calib.ILUT);

        /** LUT rpm. */
        public rpm: number[];

        /** LUT pwmL. */
        public pwmL: number[];

        /** LUT pwmR. */
        public pwmR: number[];

        /**
         * Creates a new LUT instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LUT instance
         */
        public static create(properties?: motor_calib.ILUT): motor_calib.LUT;

        /**
         * Encodes the specified LUT message. Does not implicitly {@link motor_calib.LUT.verify|verify} messages.
         * @param message LUT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: motor_calib.ILUT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LUT message, length delimited. Does not implicitly {@link motor_calib.LUT.verify|verify} messages.
         * @param message LUT message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: motor_calib.ILUT, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LUT message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LUT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): motor_calib.LUT;

        /**
         * Decodes a LUT message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LUT
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): motor_calib.LUT;

        /**
         * Verifies a LUT message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LUT message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LUT
         */
        public static fromObject(object: { [k: string]: any }): motor_calib.LUT;

        /**
         * Creates a plain object from a LUT message. Also converts values to other types if specified.
         * @param message LUT
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: motor_calib.LUT, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LUT to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for LUT
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a Result. */
    interface IResult {

        /** Result measurements */
        measurements?: (motor_calib.IMeasurements|null);

        /** Result lut */
        lut?: (motor_calib.ILUT|null);
    }

    /** Represents a Result. */
    class Result implements IResult {

        /**
         * Constructs a new Result.
         * @param [properties] Properties to set
         */
        constructor(properties?: motor_calib.IResult);

        /** Result measurements. */
        public measurements?: (motor_calib.IMeasurements|null);

        /** Result lut. */
        public lut?: (motor_calib.ILUT|null);

        /**
         * Creates a new Result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Result instance
         */
        public static create(properties?: motor_calib.IResult): motor_calib.Result;

        /**
         * Encodes the specified Result message. Does not implicitly {@link motor_calib.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: motor_calib.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link motor_calib.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: motor_calib.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): motor_calib.Result;

        /**
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): motor_calib.Result;

        /**
         * Verifies a Result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Result
         */
        public static fromObject(object: { [k: string]: any }): motor_calib.Result;

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @param message Result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: motor_calib.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Result
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
