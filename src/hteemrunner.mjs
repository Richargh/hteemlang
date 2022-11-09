/**
 * @param {HTMLDocument} document
 * @return {HTMLDocument}
 */
export function evaluate(document) {
    const result = [];

    const nodeIterator = document.createNodeIterator(document);
    let currentNode;
    while (currentNode = nodeIterator.nextNode()) {
        console.log(`Inspecting ${currentNode.nodeName} - ${currentNode.attributes}`);
        if (currentNode.nodeName.startsWith('HT:')) {
            const parent = currentNode.parentElement;
            parent.removeChild(currentNode);
            evaluateHtNode(currentNode, parent);
        }
    }

    return document;
}

function evaluateHtNode(htNode, origin) {
    if (htNode.nodeName === 'HT:IF') {
        evaluateIf(htNode, origin);
    }
}

function evaluateIf(ifNode, origin) {
    const thisNode = ifNode.getElementsByTagName('HT:THIS')[0];
    const thenNode = ifNode.getElementsByTagName('HT:THEN')[0];
    const elseNode = ifNode.getElementsByTagName('HT:ELSE')[0];
    console.log(`IF! ${thisNode.nodeName} ${thenNode.nodeName} ${elseNode.nodeName}`);
    console.log(`IF! ${thisNode.children[0]} ${thenNode.children[0]} ${elseNode.children[0]}`);

    const thisNodeValue = thisNode.nodeValue;
    const thenNodeValue = thenNode.children[0];
    const elseNodeValue = elseNode.children[0];
    if (thisNodeValue !== 'HT:NIL' && thisNodeValue !== 'HT:FALSE') {
        origin.appendChild(thenNodeValue);
    } else {
        origin.appendChild(elseNodeValue);
    }
}
