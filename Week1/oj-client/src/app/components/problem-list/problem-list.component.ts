// import 'Problem' class into 'problem-list.component.ts' file
// ..: parent directory .: current directory

import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';
// '..'指的是回到上一层目录（相当于到了components下面）, /.. 就到了app下面
// 目前还没用到数据库，先使用array来存放五道题，作为目前的题库：


const PROBLEMS: Problem[] = [

// 注意js中三种定义变量的方式 - const, var, let 三者的区别: https://www.cnblogs.com/ksl666/p/5944718.html
// const 定义的变量不可以修改，而且必须初始化
// var定义的变量可以修改，如果不初始化就会输出undefined，不会报错
// let是块级作用域，函数内部使用let定义后，对函数外部无影响

// let c = 3;
// console.log('函数外let定义c：' + c); // 输出 c = 3
// function change() {
// 	let c = 6;
// 	console.log('函数内let定义c：' + c); // 输出 c = 6
// }
// change();
// console.log('函数调用后let定义c不受函数内部定义影响：' + c); // 输出 c = 3

{
	"id": 1,
	"name": "Two Sum",
	"desc": "Given an array of integers, find two numbers such that they add up to a specific target number.\n\nThe function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are NOT zero-based.",
	"difficulty": "esay"
},
{
	"id": 2,
	"name": "3Sum",
	"desc": "Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero."
	"difficulty": "medium"
	// 注意除了最后一行，其他的一定要加逗号隔开！因为是字典啊！
},
{
	"id": 3,
	"name": "4Sum",
	"desc": "Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target?\n\nFind all unique quadruplets in the array which gives the sum of target.",
	"difficulty": "medium"
},
{
	"id": 4,
	"name": "Triangle Count","Given an array of integers, how many three numbers can be found in the array, so that we can build an triangle whose three edges length is the three numbers that we find?",
	"diffuculty": "hard"
},
{
	"id": 5,
	"name": "Sliding Window Maximum",
	"desc": "Given an array of n integer with duplicate number, and a moving window(size k), move the window at each iteration from the start of the array, find the maximum number inside the window at each moving.",
	"diffuculty": "super"
}
]:
//有一个数组，来追踪所有的题目； const 里面经常会有全大写的方法

@Component({ // 这只是一组指向而已
  selector: 'app-problem-list',
  // selector表示tagname：如果你要用到我这个文件，你需要把名字写成'app-problem-list'才行
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})

export class ProblemListComponent implements OnInit {

	// 这个@Component是一个装饰component的decorator，注释的是 ProblemList 这个 component

  constructor() { }

  ngOnInit() {
  }

}

// 写完之后：use "Problems" list inside "ProblemListComponent"

export class ProblemListComponent implements OnInit {
	// private problems list inside the component
	problems: Problem[];

	constructor() {}

	ngOnInit() {
		// initialize problems in this class
		this.getProblems();	
	}

	getProblems() {
		this.problems = PROBLEMS;
	}
}

// And then: show the problems list in UI, modify the 'Problem-list-component.html'.


