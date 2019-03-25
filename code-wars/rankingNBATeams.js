function totalize(win, winPts, los, losPts) {
	if (winPts === losPts) {
		rank[win].d++;
		rank[los].d++;
		rank[win].points = rank[win].points + winPts;
		rank[los].points = rank[los].points + winPts;
		rank[win].npoints = rank[win].npoints + winPts;
		rank[los].npoints = rank[los].npoints + winPts;
	} else {
		rank[win].w++;
		rank[los].l++;
		rank[win].points = rank[win].points + winPts;
		rank[los].points = rank[los].points + losPts;
		rank[win].npoints = rank[win].npoints + losPts;
		rank[los].npoints = rank[los].npoints + winPts;
	}
}
var rank = {};
function nbaCup(resultSheet, toFind) {
	if (!toFind) return '';
	let matches = resultSheet.split(',');
	let pairTeamPoints = [];
	// let rank = {};
	for (let i = 0; i < matches.length; i++) {
		pairTeamPoints = matches[i].match(/[\w]+\s?[\w]+[\sA-Za-z]+\s\d+\b/g);
		if (!!matches[i].match(/[\d]+\.[\d]+/g))
			return `Error(float number):${matches[i]}`;

		let team1 = pairTeamPoints[0]
			.match(/[\w\s]+[^0-9]\b/g)
			.toString()
			.trim();
		let points1 = pairTeamPoints[0].match(/\d+/g);
		let team2 = pairTeamPoints[1]
			.match(/[\w\s]+[^0-9]\b/g)
			.toString()
			.trim();
		let points2 = pairTeamPoints[1].match(/\d+\b/g);
		points2 = parseInt(points2[0]);
		points1 = parseInt(points1[0]);
		if (!rank[team1]) rank[team1] = { w: 0, d: 0, l: 0, points: 0, npoints: 0 };
		if (!rank[team2]) rank[team2] = { w: 0, d: 0, l: 0, points: 0, npoints: 0 };
		if (points1 > points2) totalize(team1, points1, team2, points2);
		if (points2 > points1) totalize(team2, points2, team1, points1);
		if (points2 === points1) totalize(team2, points2, team1, points1);
	}

	if (!rank[toFind]) return `${toFind}:This team didn't play!`;
	return `${toFind}:W=${rank[toFind].w};D=${rank[toFind].d};L=${
		rank[toFind].l
	};Scored=${rank[toFind].points};Conceded=${
		rank[toFind].npoints
	};Points=${rank[toFind].d + rank[toFind].w * 3}`;
}

const r =
	'Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112, Los Angeles Clippers 100 Boston Celtics 120';
console.log(nbaCup(r, 'Los Angeles Clippers'));
console.log(nbaCup(r, 'Dallas Mavericks'));
console.log(nbaCup(r, 'New York Knicks'));
// console.log(nbaCup(r1 + r2, 'Boston Celtics'));

// nbaCup=(Q,S,W,D,L,O,C,P,T)=>{
//     if(!S)return''
//     W=D=L=O=C=P=0
//     if(Q.split`,`.some(V=>{
//     T=V.match(/^(.*) (\d+) (.*) (\d+)$/)
//     if(!T)return Q='Error(float number):'+V
//     if(T[1]==S){
//     +T[4]<+T[2]?(P+=3,++W):+T[2]<+T[4]?++L:++P|++D
//     O+=+T[2],C+=+T[4]}
//     if(T[3]==S){
//     +T[2]<+T[4]?(P+=3,++W):+T[4]<+T[2]?++L:++P|++D
//     O+=+T[4],C+=+T[2]}
//     }))return Q
//     return W|D|L?S+`:W=${W};D=${D};L=${L};Scored=${O};Conceded=${C};Points=`+P:S+":This team didn't play!"}

// Error(float number):New York Knicks 101.12 Atlanta Hawks 112
