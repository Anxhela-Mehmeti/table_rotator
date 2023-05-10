A CLI table rotator that can be used to rotate the elements of a table by one cell to the left.


#### Installation:

After a fresh git clone install all required packages using:

```bash
$ npm i
$ npm run build
$ npm run test
```


---
#### Usage

You can use the application by running the command:

```bash
$ npm run rotate input.csv > output.csv
```

The filenames might be as you wish but the input file should be an existing file in the root folder.

The input file should be a csv one with a comma as a delimiter and with 2 columns, id:number and json:string (that actually contains an array of numbers). 
The structure of the output file is the same, but with an additional column, is_valid:boolean (which will store the status of the rotation posibility of the array).

---
Example

Input.csv

```bash
id,json
1,"[1,2,3]"
2,"[]"
3,"[1,2,3,4]"
4,"[1,2,3,4,5,6,7,8,9]"
````

Output.csv

```bash
id,json,is_valid
1,"[]",false
2,"[]",false
3,"[2,4,1,3]",true
4,"[2,3,6,1,5,9,4,7,8]",true
```
