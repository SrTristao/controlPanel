"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ServiceError extends Error {
    constructor(type, data = {}) {
        super(type);
        this.data = null;
        this.data = data;
    }
}
exports.ServiceError = ServiceError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlci9lcnJvcnMvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGtCQUEwQixTQUFRLEtBQUs7SUFHbkMsWUFBWSxJQUFZLEVBQUUsT0FBWSxFQUFFO1FBQ3BDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUhULFNBQUksR0FBUSxJQUFJLENBQUM7UUFJcEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDckIsQ0FBQztDQUNKO0FBUEQsb0NBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU2VydmljZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIHB1YmxpYyBkYXRhOiBhbnkgPSBudWxsO1xuXG4gICAgY29uc3RydWN0b3IodHlwZTogc3RyaW5nLCBkYXRhOiBhbnkgPSB7fSkge1xuICAgICAgICBzdXBlcih0eXBlKTtcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB9XG59Il19