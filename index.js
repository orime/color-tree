#!/usr/bin/env node
const program = require('commander')
const fs = require('fs')
const path = require('path')

const helpOptions = require('./lib/core/help')
const package = require('./package.json')

// 查看版本号
program.version(package.version)

// * 注册帮助信息
helpOptions()

// 识别命令行工具
program.parse(process.argv)

// console.log(program.directory, program.ignore, program.export)

const { directory, ignore, exp } = program
console.log(directory, ignore, exp, '原始参数')

const ignoreRegex = new RegExp(ignore, '')

// 递归读取对应文件夹
const dirToJson = (dir) => {
  let stats = fs.statSync(dir)
  let structure = {}
  if(stats.isDirectory()){
    let directory = fs.readdirSync(path.resolve(__dirname, dir))
    directory = directory.filter(d => !ignoreRegex.test(d)) // * 过滤忽略项
    // console.log(directory, 'filter后的目录')
    directory = directory.map((child) => dirToJson(dir+'/'+child)) // * 组织新的结构
    console.log(directory)
    structure[]
  } else {
    return dir
  }
}


dirToJson(directory)