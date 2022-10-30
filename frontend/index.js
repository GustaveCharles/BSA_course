import {ethers} from "./ethers-5.6.esm.min.js"

const connectButton = document.getElementById('connectButton')
const balanceButton = document.getElementById('balanceButton')
const balanceETH = document.getElementById('balanceETH')

connectButton.onclick = connect 
balanceButton.onclick = getBalance

const provider = new ethers.providers.Web3Provider(window.ethereum)
const signer = provider.getSigner()
//const contractNftTickerManager = new ethers.Contract()

function connect(){
    //checks if you have a wallet installed on your browser
    if (typeof window.ethereum !== 'undefined'){
        window.ethereum.request({method: 'eth_requestAccounts'})
        console.log('Connected!')
        connectButton.innerHTML = 'Connected!'
    }else{
        connectButton.innerHTML = 'Connect Metamask - metamask.io'
    }
}
