var baseURL = "https://textures.minecraft.net/texture/"

hasSkin = SearchParams.has('skin');
hasCape = SearchParams.has('cape');

var textures = null;

function setTextures() {
	if (hasSkin && !hasCape) {
		textures = [
			{name: 'skin', texture: baseURL+SearchParams.get('skin')}
		]
	}
	
	if (hasSkin && hasCape) {
		textures = [
			{name: 'skin', texture: baseURL+SearchParams.get('skin')},
			{name: 'cape', texture: baseURL+SearchParams.get('cape')}
		]
	}

	if (!hasSkin && hasCape) {
		textures = [
			{name: 'cape', texture: baseURL+SearchParams.get('cape')}
		]
	}

	if (textures == null) {
		console.log("no texture assigned, using fallback.");
		textures = [
		{name: 'skin', texture: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAByElEQVR4nO2azW2EMBCFnyNSQ6RtgHYoJU24H2qgCxpA4ozEJQfntJFY2XhYezI2409aCa28ePw8f5g1iOMIY84wib9n5UPaAGmaANIGSNMEkDZAmiaAtAHSmAx1PocNYqj3APUClBAConTSBgD4AvAjNXkJHtCSoCTqBfC5XywkYi7LfX6Qat8B9R7QBJA2QJoSyiA3pzlBvQewdYLOHR3LmDIPh1lCYFkW7/ePxyP3VBROlWfxgG3bAAB93wMA5nnmmCYLLAI8Fw4A0zRhXVeOabLAWgXGcfy7HoaBa5oYclVg33fs+y65+CitD+Cc2VoLay3nFMmwngiFymFJqA8BH3cX5ID6Z4EmAGGMC1zfglASpCYOJ32snUrIeOpOV714RMog9XS2ahFKeDUW4+oGXdqYLmEHq975J+pDQH0fkINP5vu7wCc2noR6D+g8apmX+M76MvIi34z3DnLr1vcV3w6X5AHsUErd1QVy/78gq+Dqk2ATgDDm1knx3Xg0hDH/RVJO8PUBlJtLLzobZ+pRs7G0GMkecEfIpfRMgKobHCpnAtTcAZJtU98H3DUEyN7bPCDD02DVhP4tbjzXIaQFyt4JqvKAXzymYdLNqPk2AAAAAElFTkSuQmCC'}
		]
	}
}

setTextures();