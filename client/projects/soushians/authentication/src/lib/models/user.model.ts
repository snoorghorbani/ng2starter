export class UserModel {
	_id: string;
	// FirstName: string;
	// LastName: string;
	Username: string;
	// MobileNumber: string;
	// Sex: string;
	// Birthdate: string;
	Email: string;
	// IdentificationNo: string;
	// IdentifierType: string;
	// RegisterDate: string;
	// UserType: string;
	Roles: string[] = [];

	constructor(params?: any) {
		params &&
			Object.keys(params).forEach(key => {
				if (key in params) (this as any)[key] = params[key];
			});
	}
}
