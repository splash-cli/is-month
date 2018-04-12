# is-month
> Check if the current month is equalt to the given month

## Install
```sh
	$ npm install is-month --save

	#or 

	$ yarn add is-month
```

## Usage
```js
	import isMonth from 'is-month';

	console.log( isMonth('april', { today: new Date('2018/04/12') })  ) //=> true
```

## Api
### isMonth(month, { today })
Returns a boolean.

#### month
Type: `String`
Month to check

#### today
Type: `Date`
Default: `new Date()`
Date to check

### isMonth.promise(month, { today })
Returns a promise for a boolean.
#### month
Type: `String`
Month to check

#### today
Type: `Date`
Default: `new Date()`
Date to check

## License
MIT © [Federico Vitale](https://federicovitale.me)