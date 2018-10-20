import { Component, OnInit } from '@angular/core';
import { Problem } from '../../models/problem.model';
// '..'指的是回到上一层目录（相当于到了components下面）, /.. 就到了app下面
// 目前还没用到数据库，先使用array来存放五道题，作为目前的题库：

const PROBLEMS: Problem[] = [
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
	// 注意除了最后一行，其他的一定要加逗号隔开！
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

@Component({
  selector: 'app-problem-list',
  templateUrl: './problem-list.component.html',
  styleUrls: ['./problem-list.component.css']
})
export class ProblemListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
