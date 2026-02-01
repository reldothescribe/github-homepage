// Research Bounty Board - Web3 Interface
// Contract: 0xb31BBc175361B32f81c5ecAdF19699Ce757a6901 @ Base Mainnet

const CONTRACT_ADDRESS = '0xb31BBc175361B32f81c5ecAdF19699Ce757a6901';
const CHAIN_ID = 8453; // Base Mainnet

const CONTRACT_ABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "bountyId", "type": "uint256"},
            {"internalType": "uint256", "name": "submissionId", "type": "uint256"}
        ],
        "name": "approveSubmission",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "bountyCount",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "name": "bounties",
        "outputs": [
            {"internalType": "address", "name": "sponsor", "type": "address"},
            {"internalType": "string", "name": "topic", "type": "string"},
            {"internalType": "string", "name": "requirements", "type": "string"},
            {"internalType": "uint256", "name": "reward", "type": "uint256"},
            {"internalType": "uint256", "name": "deadline", "type": "uint256"},
            {"internalType": "enum ResearchBountyBoard.BountyStatus", "name": "status", "type": "uint8"},
            {"internalType": "address", "name": "claimant", "type": "address"},
            {"internalType": "string", "name": "findingHash", "type": "string"},
            {"internalType": "uint256", "name": "claimedAt", "type": "uint256"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "bountyId", "type": "uint256"}],
        "name": "getActiveBounties",
        "outputs": [{"internalType": "uint256[]", "name": "", "type": "uint256[]"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "bountyId", "type": "uint256"}],
        "name": "getBounty",
        "outputs": [
            {
                "components": [
                    {"internalType": "address", "name": "sponsor", "type": "address"},
                    {"internalType": "string", "name": "topic", "type": "string"},
                    {"internalType": "string", "name": "requirements", "type": "string"},
                    {"internalType": "uint256", "name": "reward", "type": "uint256"},
                    {"internalType": "uint256", "name": "deadline", "type": "uint256"},
                    {"internalType": "enum ResearchBountyBoard.BountyStatus", "name": "status", "type": "uint8"},
                    {"internalType": "address", "name": "claimant", "type": "address"},
                    {"internalType": "string", "name": "findingHash", "type": "string"},
                    {"internalType": "uint256", "name": "claimedAt", "type": "uint256"}
                ],
                "internalType": "struct ResearchBountyBoard.Bounty",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getActiveBounties",
        "outputs": [{"internalType": "uint256[]", "name": "", "type": "uint256[]"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "string", "name": "topic", "type": "string"},
            {"internalType": "string", "name": "requirements", "type": "string"},
            {"internalType": "uint256", "name": "duration", "type": "uint256"}
        ],
        "name": "postBounty",
        "outputs": [{"internalType": "uint256", "name": "bountyId", "type": "uint256"}],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "bountyId", "type": "uint256"},
            {"internalType": "string", "name": "findingHash", "type": "string"},
            {"internalType": "string", "name": "evidenceURI", "type": "string"}
        ],
        "name": "submitFinding",
        "outputs": [{"internalType": "uint256", "name": "submissionId", "type": "uint256"}],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "bountyId", "type": "uint256"}],
        "name": "getSubmissionCount",
        "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {"internalType": "uint256", "name": "bountyId", "type": "uint256"},
            {"internalType": "uint256", "name": "submissionId", "type": "uint256"}
        ],
        "name": "getSubmission",
        "outputs": [
            {"internalType": "address", "name": "researcher", "type": "address"},
            {"internalType": "string", "name": "findingHash", "type": "string"},
            {"internalType": "string", "name": "evidenceURI", "type": "string"},
            {"internalType": "uint256", "name": "submittedAt", "type": "uint256"},
            {"internalType": "enum ResearchBountyBoard.FindingStatus", "name": "status", "type": "uint8"}
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{"internalType": "uint256", "name": "bountyId", "type": "uint256"}],
        "name": "isClaimable",
        "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "uint256", "name": "bountyId", "type": "uint256"},
            {"indexed": true, "internalType": "address", "name": "sponsor", "type": "address"},
            {"indexed": false, "internalType": "string", "name": "topic", "type": "string"},
            {"indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256"},
            {"indexed": false, "internalType": "uint256", "name": "deadline", "type": "uint256"}
        ],
        "name": "BountyPosted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {"indexed": true, "internalType": "uint256", "name": "bountyId", "type": "uint256"},
            {"indexed": true, "internalType": "address", "name": "researcher", "type": "address"},
            {"indexed": false, "internalType": "string", "name": "findingHash", "type": "string"},
            {"indexed": false, "internalType": "uint256", "name": "submissionId", "type": "uint256"}
        ],
        "name": "SubmissionMade",
        "type": "event"
    }
];

let provider = null;
let signer = null;
let contract = null;
let currentBountyId = null;

// Initialize
async function init() {
    // Check if MetaMask is available
    if (typeof window.ethereum !== 'undefined') {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        
        // Auto-load bounties
        await loadBounties();
        await loadStats();
        
        // Listen for account changes
        window.ethereum.on('accountsChanged', () => {
            location.reload();
        });
    } else {
        // Use read-only provider for Base
        provider = new ethers.providers.JsonRpcProvider('https://mainnet.base.org');
        await loadBounties();
        await loadStats();
    }
}

function getReadContract() {
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
}

function getWriteContract() {
    if (!signer) {
        throw new Error('Wallet not connected');
    }
    return new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
}

async function connectWallet() {
    if (typeof window.ethereum === 'undefined') {
        showStatus('Please install MetaMask', 'error');
        return false;
    }
    
    try {
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        
        // Check chain
        const network = await provider.getNetwork();
        if (network.chainId !== CHAIN_ID) {
            showStatus('Please switch to Base Mainnet', 'error');
            return false;
        }
        
        return true;
    } catch (err) {
        showStatus('Failed to connect wallet: ' + err.message, 'error');
        return false;
    }
}

async function loadStats() {
    try {
        const contract = getReadContract();
        const count = await contract.bountyCount();
        
        let active = 0;
        let totalRewards = ethers.BigNumber.from(0);
        
        for (let i = 0; i < count; i++) {
            const bounty = await contract.getBounty(i);
            const isClaimable = await contract.isClaimable(i);
            
            if (isClaimable) {
                active++;
            }
            
            if (bounty.status === 3) { // Resolved
                totalRewards = totalRewards.add(bounty.reward);
            }
        }
        
        document.getElementById('stat-total').textContent = count.toString();
        document.getElementById('stat-active').textContent = active.toString();
        document.getElementById('stat-rewards').textContent = 
            parseFloat(ethers.utils.formatEther(totalRewards)).toFixed(3) + ' ETH';
    } catch (err) {
        console.error('Failed to load stats:', err);
    }
}

async function loadBounties() {
    const container = document.getElementById('bounties-list');
    
    try {
        const contract = getReadContract();
        const activeIds = await contract.getActiveBounties();
        
        if (activeIds.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">📭</div>
                    <p>No active bounties yet</p>
                    <p style="font-size: 13px; margin-top: 8px;">Be the first to post a research bounty!</p>
                </div>
            `;
            return;
        }
        
        let html = '';
        
        for (const id of activeIds.reverse()) {
            const bounty = await contract.getBounty(id);
            const submissionCount = await contract.getSubmissionCount(id);
            
            const reward = ethers.utils.formatEther(bounty.reward);
            const deadline = new Date(bounty.deadline * 1000);
            const timeLeft = Math.max(0, Math.ceil((deadline - Date.now()) / (1000 * 60 * 60 * 24)));
            
            html += `
                <div class="bounty-card">
                    <div class="bounty-header">
                        <div class="bounty-topic">${escapeHtml(bounty.topic)}</div>
                        <div class="bounty-reward">${parseFloat(reward).toFixed(4)} ETH</div>
                    </div>
                    <div class="bounty-requirements">${escapeHtml(bounty.requirements)}</div>
                    <div class="bounty-meta">
                        <span>📝 Bounty #${id}</span>
                        <span>⏰ ${timeLeft} days left</span>
                        <span>👤 ${shortenAddress(bounty.sponsor)}</span>
                        <span>📎 ${submissionCount} submission${submissionCount !== 1 ? 's' : ''}</span>
                    </div>
                    <button class="btn btn-secondary btn-sm" onclick="showSubmitPanel(${id})" style="margin-top: 16px;">
                        Submit Finding
                    </button>
                </div>
            `;
        }
        
        container.innerHTML = html;
    } catch (err) {
        console.error('Failed to load bounties:', err);
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">⚠️</div>
                <p>Failed to load bounties</p>
                <p style="font-size: 13px; margin-top: 8px;">${err.message}</p>
            </div>
        `;
    }
}

async function postBounty() {
    const topic = document.getElementById('topic').value.trim();
    const requirements = document.getElementById('requirements').value.trim();
    const reward = document.getElementById('reward').value;
    const duration = document.getElementById('duration').value;
    
    if (!topic || !requirements || !reward || !duration) {
        showStatus('Please fill in all fields', 'error');
        return;
    }
    
    if (parseFloat(reward) < 0.001) {
        showStatus('Minimum bounty is 0.001 ETH', 'error');
        return;
    }
    
    const connected = await connectWallet();
    if (!connected) return;
    
    showStatus('Posting bounty...', 'loading');
    
    try {
        const contract = getWriteContract();
        const rewardWei = ethers.utils.parseEther(reward);
        
        const tx = await contract.postBounty(topic, requirements, parseInt(duration), {
            value: rewardWei
        });
        
        showStatus('Waiting for confirmation...', 'loading');
        await tx.wait();
        
        showStatus('Bounty posted successfully!', 'success');
        
        // Clear form
        document.getElementById('topic').value = '';
        document.getElementById('requirements').value = '';
        document.getElementById('reward').value = '';
        
        // Reload
        await loadBounties();
        await loadStats();
        showPanel('bounties');
    } catch (err) {
        console.error('Failed to post bounty:', err);
        showStatus('Failed: ' + (err.reason || err.message), 'error');
    }
}

async function showSubmitPanel(bountyId) {
    currentBountyId = bountyId;
    
    try {
        const contract = getReadContract();
        const bounty = await contract.getBounty(bountyId);
        const reward = ethers.utils.formatEther(bounty.reward);
        
        document.getElementById('submit-bounty-details').innerHTML = `
            <div class="bounty-card" style="margin-bottom: 24px;">
                <div class="bounty-header">
                    <div class="bounty-topic">${escapeHtml(bounty.topic)}</div>
                    <div class="bounty-reward">${parseFloat(reward).toFixed(4)} ETH</div>
                </div>
                <div class="bounty-requirements">${escapeHtml(bounty.requirements)}</div>
            </div>
        `;
        
        showPanel('submit');
    } catch (err) {
        showStatus('Failed to load bounty details', 'error');
    }
}

async function submitFinding() {
    if (currentBountyId === null) {
        showStatus('No bounty selected', 'error');
        return;
    }
    
    const findingHash = document.getElementById('finding-hash').value.trim();
    const evidenceUri = document.getElementById('evidence-uri').value.trim();
    
    if (!findingHash) {
        showStatus('Please provide a finding hash or URL', 'error');
        return;
    }
    
    const connected = await connectWallet();
    if (!connected) return;
    
    showStatus('Submitting finding...', 'loading');
    
    try {
        const contract = getWriteContract();
        
        const tx = await contract.submitFinding(currentBountyId, findingHash, evidenceUri);
        
        showStatus('Waiting for confirmation...', 'loading');
        await tx.wait();
        
        showStatus('Finding submitted successfully!', 'success');
        
        // Clear form
        document.getElementById('finding-hash').value = '';
        document.getElementById('evidence-uri').value = '';
        
        // Go back to bounties
        setTimeout(() => {
            showPanel('bounties');
            loadBounties();
        }, 2000);
    } catch (err) {
        console.error('Failed to submit:', err);
        showStatus('Failed: ' + (err.reason || err.message), 'error');
    }
}

function showPanel(name) {
    // Hide all panels
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    
    // Show selected
    document.getElementById('panel-' + name).classList.add('active');
    
    // Update tab
    const tabs = document.querySelectorAll('.tab');
    if (name === 'bounties') tabs[0].classList.add('active');
    if (name === 'post') tabs[1].classList.add('active');
}

function showStatus(message, type) {
    const el = document.getElementById('status');
    el.textContent = message;
    el.className = 'status ' + type;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function shortenAddress(addr) {
    return addr.slice(0, 6) + '...' + addr.slice(-4);
}

// Initialize on load
window.addEventListener('load', init);
