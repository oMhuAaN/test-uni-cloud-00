'use strict';
exports.main = async (event, context) => {

	let res = await uniCloud.database().collection('users').add([
		{
			name: '小小张'
		},
		{
			name: '小大张'
		}
	])
	console.log('添加数据')
	console.log(JSON.stringify(res))

	return {}
};
