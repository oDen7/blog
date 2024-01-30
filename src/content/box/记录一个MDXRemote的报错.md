# 记录一个MDXRemote的报错
> 最近玩nextjs使用了MDXRemote做md文件的动态解析遇到了一个时有定位到代码片段报错有时又没有的提醒的报错

```javascript
Error: [next-mdx-remote] error compiling MDX:
Cannot read properties of undefined (reading 'inTable')
```

## 解决方案
> 请检查自己的md文件中用到的符号是否(\)进行了转译操作


## 例子
#### 报错片段
```markdown
## 定义
> 线性表是具有`相同`数据类型的n（n≥0）个\`数据元素\`的\`有限序列\`，其中n为\`表长\`，当n = 0时线
性表是一个\`空表\`。

// 片段中 `相同` 没有使用 (\) 符号进行转译
```

#### 修改为
```markdown
## 定义
> 线性表是具有\`相同\`数据类型的n（n≥0）个\`数据元素\`的\`有限序列\`，其中n为\`表长\`，当n = 0时线
性表是一个\`空表\`。
> 
> 若用L命名线性表，则其一般表示为 L = (a1, a2, … , ai, ai+1, … , an)
```