/*
 * @Author: 后盾人 
 * @Date: 2021-04-19 20:49:21 
 * @Last Modified by: larassa
 * @Last Modified time: 2021-04-21 23:31:21
 */
class HD {
	static PENDING = 'pending';
	static FULFILLED = 'fulfilled';
	static REJECTED = 'rejected';

	constructor(executor) {
		this.status = HD.PENDING;
		this.value = null;
		this.callbacks = []

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
		setTimeout(() => {
			this.callbacks.map(callback => {
				callback.onFulfilled(value)
			})
		})
	}

	reject(reason) {
		if(this.status != HD.PENDING) return;
		this.status = HD.REJECTED;
		this.value = reason;
		setTimeout(() => {
			this.callbacks.map(callback => {
				callback.onRejected(reason)
			})
		})
		
	}

	then(onFulfilled, onRejected) {
		if(typeof onFulfilled != 'function') {
			onFulfilled = () => {}
		}
		if(typeof onRejected != 'function') {
			onRejected = () => {}
		}
		if(this.status == HD.FULFILLED) {
			setTimeout(() => {
				try {
					onFulfilled(this.value)
				} catch (error) {
					onRejected(error)
				}
			})
		}
		if(this.status == HD.PENDING) {
			this.callbacks.push({
				onFulfilled: value => {
					try {
						onFulfilled(value)
					} catch (error) {
						onRejected(error)
					}
				},
				onRejected: reason => {
					try {
						onRejected(reason)
					} catch (error) {
						onRejected(error)
					}
				}
			})
		}
		if(this.status == HD.REJECTED) {
			console.log('then')
			setTimeout(() => {
				try {
					onRejected(this.value)
				} catch (error) {
					onRejected(error)
				}
			})
		}

		// then链式
		// return new HD((resolve, reject) => {
		// 	if(this.status == HD.FULFILLED) {
		// 		setTimeout(() => {
		// 			try {
		// 				onFulfilled(this.value)
		// 			} catch (error) {
		// 				onRejected(error)
		// 			}
		// 		})
		// 	}
		// 	if(this.status == HD.PENDING) {
		// 		this.callbacks.push({
		// 			onFulfilled: value => {
		// 				try {
		// 					onFulfilled(value)
		// 				} catch (error) {
		// 					onRejected(error)
		// 				}
		// 			},
		// 			onRejected: reason => {
		// 				try {
		// 					onRejected(reason)
		// 				} catch (error) {
		// 					onRejected(error)
		// 				}
		// 			}
		// 		})
		// 	}
		// 	if(this.status == HD.REJECTED) {
		// 		setTimeout(() => {
		// 			try {
		// 				onRejected(this.value)
		// 			} catch (error) {
		// 				onRejected(error)
		// 			}
		// 		})
		// 	}
		// })
		
	}
}