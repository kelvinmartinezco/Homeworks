class Node {
    constructor(value, link = "#", component = null) {
        this.value = value
        this.link = link
        this.component = component
        this.children = []
    }

    addChild(node) {
        this.children.push(node)
    }
}

const menuNode = new Node("menu")
const profileNode = new Node("Profile")
const messagesNode = new Node("Messages")
const settingsNode = new Node("Settings")
const accountNode = new Node("Account")
const profileSubNode = new Node("Profile")
const securityNode = new Node("Security & Privacy")
const passwordNode = new Node("Password")
const notificationNode = new Node("Notification")
const helpNode = new Node("Help")
const faqNode = new Node("FAQ's")
const ticketNode = new Node("Submit a Ticket")
const networkNode = new Node("Network Status")
const logoutNode = new Node("Logout")

menuNode.addChild(profileNode)
menuNode.addChild(messagesNode)
menuNode.addChild(settingsNode)
settingsNode.addChild(accountNode)
settingsNode.addChild(profileSubNode)
settingsNode.addChild(securityNode)
settingsNode.addChild(passwordNode)
settingsNode.addChild(notificationNode)
menuNode.addChild(helpNode)
helpNode.addChild(faqNode)
helpNode.addChild(ticketNode)
helpNode.addChild(networkNode)
menuNode.addChild(logoutNode)

export default menuNode

