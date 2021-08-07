const configFactory = () => new Config()

class Config {
    constructor() {
        this.website = 'prdnotes'
        this.attributes = [
            {
                name: "Easy Management",
                value: "easyManagement"
            },
            {
                name: "Automated Distribution",
                value: "automatedDistribution"
            },
            {
                name: "Configurable Monitization",
                value: "configurableMonitization"
            }
        ]
        this.attributeList = {
            easyManagement: [
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/prdnotesdotcom.appspot.com/o/troutTech%2Fimages%2Fuser-management.png?alt=media&token=3c288f43-8733-47d1-b017-766cf7a0bf77',
                    lab: 'user management'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/prdnotesdotcom.appspot.com/o/troutTech%2Fimages%2Fcontent-management.png?alt=media&token=adaaabb3-6e0b-435e-94af-4592f5676a6b',
                    lab: 'content management'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/prdnotesdotcom.appspot.com/o/troutTech%2Fimages%2Fcomment-management.png?alt=media&token=50e001c7-3c3e-4e5f-93ff-3d4be63334e7',
                    lab: 'comment management'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/prdnotesdotcom.appspot.com/o/troutTech%2Fimages%2Fpolicy-management.png?alt=media&token=9c439d61-95d4-498d-8293-b00b84dbfc03',
                    lab: 'policy management'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/prdnotesdotcom.appspot.com/o/troutTech%2Fimages%2Fweb-analytics.png?alt=media&token=b92f24c3-84c8-42d8-b9b4-0b73f7461a38',
                    lab: 'web analytics'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/prdnotesdotcom.appspot.com/o/troutTech%2Fimages%2Fsubscription-management.png?alt=media&token=9355044d-a51d-48b2-8dd5-21801789af95',
                    lab: 'subscription management'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/prdnotesdotcom.appspot.com/o/troutTech%2Fimages%2Fnews-letter.png?alt=media&token=8125cff7-db1a-4a7f-9958-7949bd03e012',
                    lab: 'news letter'
                },
                {
                    img: 'https://firebasestorage.googleapis.com/v0/b/prdnotesdotcom.appspot.com/o/troutTech%2Fimages%2Fseo-management.png?alt=media&token=c56c8550-0bb5-42ec-a46b-f729abccb651',
                    lab: 'seo management'
                }
            ]
        }
    }

    getValue(key) {
        return this[key]
    }

}


export { Config, configFactory }