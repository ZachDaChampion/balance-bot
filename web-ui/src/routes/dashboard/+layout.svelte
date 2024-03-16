<div id="container">
    <div id="layout">
        <slot />
    </div>
</div>

<style>
    #container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 1rem;
    }

    #layout {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 1rem;
        width: 100%;
        /* max-width: 1280px; */
    }
</style>
