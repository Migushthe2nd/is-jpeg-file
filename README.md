# is-jpeg-file

Checks if the file path is jpeg file. It does not read the complete file nor does it depend on the file extension

### Installation

<!-- Install with [npm](https://www.npmjs.com/):

```sh
$ npm install is-jpeg-file --save
``` -->

### Usage

```javascript
var JPEG_FILE = require('is-jpeg-file');

// If a valid jpeg file is provided and exists at path specified
JPEG_FILE.isJpeg('temp.sarc', function (err, is) {
	if (err) {
		console.log('Error while checking if file is jpeg : ' + err);
	} else {
		console.log('Given file is jpeg : ' + is);
	}
});
//=> Given file is jpeg : true

// If a valid jpeg file is provided and exists at path specified
JPEG_FILE.isJpegSync('temp.sarc');
//=> true
```

### Clone the repo

```bash
$ git clone https://github.com/Migushthe2nd/is-jpeg-file.git
```

### API

#### isjpeg(path, cb)

This is asynchronous API for checking if file is jpeg. This API takes two parameters:

1. File path which needs to be checked and
2. callback, which is invoked when it checks the file to be jpeg or not or in case of errors

It throws

1. TypeError if path is not provided or if provided but not of type String or if callback is not provided or if provided but not of type Function
2. FileNotExists error which specified file does not exists.

Callback has two parameters:

1. First parameter is error which is null in case of success
2. Second parameter is boolean value which indicates if file is jpeg or not

**Example**

```javascript
var JPEG_FILE = require('is-jpeg-file');

// If a valid jpeg file is provided and exists at path specified
JPEG_FILE.isJpeg('temp.sarc', function (err, is) {
	if (err) {
		console.log('Error while checking if file is jpeg : ' + err);
	} else {
		console.log('Given file is jpeg : ' + is);
	}
});
//=> Given file is jpeg : true
```

#### isjpegSync(path)

This is synchronous API for checking if file is jpeg. This API takes one parameter:

1. File path which needs to be checked

It throws

1. TypeError if path is not provided or if provided but not of type String
2. FileNotExists error which specified file does not exists.

It returns
Boolean indicating if file at specified path is jpeg or not

**Example**

```javascript
var JPEG_FILE = require('is-jpeg-file');

// If a valid jpeg file is provided and exists at path specified
JPEG_FILE.isJpegSync('temp.sarc');
//=> true
```

### Author

**Migush**

-   [github/Migushthe2nd](https://github.com/Migushthe2nd)

## License

MIT
