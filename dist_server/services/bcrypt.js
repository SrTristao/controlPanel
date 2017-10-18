"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = require("../errors/service");
const bcrypt = require("bcrypt-nodejs");
async function hash(password) {
    return await new Promise((resolve, reject) => {
        bcrypt.genSalt(11, (err, salt) => {
            if (err)
                return reject(err);
            bcrypt.hash(password, salt, null, async (err, hash) => {
                if (err)
                    return reject(err);
                resolve(hash);
            });
        });
    });
}
exports.hash = hash;
async function compare(hash, password) {
    return await new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, (err, isMatch) => {
            if (err || !isMatch)
                return reject(new service_1.ServiceError(err || 'invalid-password'));
            resolve();
        });
    });
}
exports.compare = compare;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNyeXB0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmVyL3NlcnZpY2VzL2JjcnlwdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtDQUFpRDtBQUNqRCx3Q0FBd0M7QUFFakMsS0FBSyxlQUFlLFFBQWdCO0lBQ3pDLE1BQU0sQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBRW5ELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBUSxFQUFFLElBQVksRUFBRSxFQUFFO1lBQzVDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztnQkFBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRTVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQVEsRUFBRSxJQUFZLEVBQUUsRUFBRTtnQkFDakUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBYkQsb0JBYUM7QUFFTSxLQUFLLGtCQUFrQixJQUFZLEVBQUUsUUFBZ0I7SUFDMUQsTUFBTSxDQUFDLE1BQU0sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFFakQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBUSxFQUFFLE9BQWdCLEVBQUUsRUFBRTtZQUM1RCxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHNCQUFZLENBQUMsR0FBRyxJQUFJLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUNoRixPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBVEQsMEJBU0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXJ2aWNlRXJyb3IgfSBmcm9tICcuLi9lcnJvcnMvc2VydmljZSc7XG5pbXBvcnQgKiBhcyBiY3J5cHQgZnJvbSAnYmNyeXB0LW5vZGVqcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoKHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2U8c3RyaW5nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICBiY3J5cHQuZ2VuU2FsdCgxMSwgKGVycjogYW55LCBzYWx0OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcblxuICAgICAgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQsIG51bGwsIGFzeW5jIChlcnI6IGFueSwgaGFzaDogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChlcnIpIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgcmVzb2x2ZShoYXNoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29tcGFyZShoYXNoOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuICAgIGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCBoYXNoLCAoZXJyOiBhbnksIGlzTWF0Y2g6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmIChlcnIgfHwgIWlzTWF0Y2gpIHJldHVybiByZWplY3QobmV3IFNlcnZpY2VFcnJvcihlcnIgfHwgJ2ludmFsaWQtcGFzc3dvcmQnKSk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSk7XG5cbiAgfSk7XG59Il19