const parserFactory = (container) => new Parser(container)

class Parser {
    constructor(container) {
        this.container = container
    }

    pathToNormal(path) {
        const regex = /(^[a-z]|[A-Z])/gm
        const str = path.substring(1)
        return str.replace(regex, (x) => " " + x.toUpperCase())
    }

    editorStateToRaw(editorState) {
        try {
            const raw = this.container.convertToRaw(editorState.getCurrentContent())
            return JSON.stringify(raw)
        } catch (e) {
            console.log(e)
        }
    }

    rawToEditorState(rawData) {
        try {
            const contentState = this.container.convertFromRaw(JSON.parse(rawData))
            const editorState = this.container.EditorState.createWithContent(contentState)
            return editorState
        } catch (e) {
            console.log(e.message)
        }
    }
}

export { Parser, parserFactory }