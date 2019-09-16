import { uniqBy } from 'lodash';

export default function pieCalculator(comments) {
	console.log('piecalculator called', comments);
	// Nombre de participant
	// On sort les commentaires par id d'utilisateur
	// puis on map ces commentaires afin d'obtenir le nombre de commentaire par participants
	const participants = uniqBy(comments, comment => comment.user.id)
		.map(comment => ({
			user: comment.user.login,
			id: comment.user.id,
			nombreCommentaires: comments.filter(n => n.user.id === comment.user.id),
			nombreMots: 0,
		}));

	let totalMots = 0; // Pour calculer le % de mots par utilisateur

	// Nombre total de mots par participant
	// on boucle d'abord sur les participants puis sur les commentaires de ces participants
	// enfin, on ajoute le nombre de mots de chaque commentaire dans la propriété "nombreMots" de chaque utilisateur
	for (let i = 0; i < participants.length; i += 1) {
		for (let j = 0; j < participants[i].nombreCommentaires.length; j += 1) {
			const totalMotCommentaire = participants[i].nombreCommentaires[j].body.split(' ').length;
			participants[i].nombreMots += totalMotCommentaire;
			totalMots += totalMotCommentaire;
		}
	}

	console.log('Résultats pie calculator', totalMots, participants);

	return {
		totalMots,
		participants,
	};
}
