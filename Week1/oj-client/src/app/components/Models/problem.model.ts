// 要想一个题目需要有哪些元素
// 且希望这个model可以应用到其他地方，因此是用export
// 这个会在 problem-list 这个 component 里头用到，所以要到 app - problem-list - problem-list.component.ts 进行引入 


export class Problem {
	id: number;
	name: string;
	desc: string;
	difficulty: string;
}

// import 'Problem' class into 'problem-list.component.ts' file
// ..: parent directory .: current directory

// import { Problem } from '../../models/problems.problem.model';


