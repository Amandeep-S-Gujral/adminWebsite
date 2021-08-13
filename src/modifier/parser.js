const parserFactory = () => new Parser()

class Parser{

    pathToNormal(path){
        const regex = /(^[a-z]|[A-Z])/gm
        const str = path.substring(1)
        return str.replace(regex, (x) => " "+x.toUpperCase())
    }
}

export {Parser, parserFactory}