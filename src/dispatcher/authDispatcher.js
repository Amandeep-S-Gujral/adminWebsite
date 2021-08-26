const authDispatcherFactory = (container) => new AuthDispatcher(container)

class AuthDispatcher {
    constructor(container) {
        this.container = container
        this.idToken=null
    }

    async signIn(email, password) {
        const res = await this.container.auth.signInWithEmailAndPassword(email, password)
        return res.user.getIdToken()
    }

     async getIdToken() {
        this.container.auth.onAuthStateChanged(async user =>{
            if(user){
                const idToken = await user.getIdToken()
                this.container.cookies.set('idToken', idToken, { path: '/' })
                return
            }

            throw new Error('invalid user credentials')
        })
    }

    async signOut() {
        await this.container.auth.signOut()
        return true
    }
}

export {
    AuthDispatcher,
    authDispatcherFactory
}
