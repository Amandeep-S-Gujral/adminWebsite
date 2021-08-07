class Container {
    setInternalModule(name, module) {
        this[name] = module(this)
    }

    setExternalModule(name, module) {
        this[name] = module
    }

    setModel(name, model) {
        this[name] = model()
    }

    setComponent(name, component) {
        this[name] = component
    }

    getContainer() {
        return this
    }
}

export default Container