/*
 * @Author: 后盾人 
 * @Date: 2021-04-19 20:49:21 
 * @Last Modified by: larassa
 * @Last Modified time: 2021-04-19 21:34:39
 */
class HD {
	static PENDING = 'pending';
	static FULFILLED = 'fulfilled';
	static REJECTED = 'rejected';

	constructor(executor) {
		this.status = HD.PENDING;
		this.value = null;
		try {
			executor(this.resolve.bind(this), this.reject.bind(this));
		} catch(err) {
			this.reject(err)
		}
	}

	resolve(value) {
		if(this.status != HD.PENDING) return;
		this.status = HD.FULFILLED;
		this.value = value
	}

	reject(reason) {
		if(this.status != HD.PENDING) return;
		this.status = REJECTED;
		this.value = reason;
	}
}