export class Validate {
  hasError: boolean;
  errors: object | undefined;

  constructor(body: any, restrictions: any) {
    this.hasError = false;

    const errorObject = new Map();

    let key: any, value: any;
    for ([key, value] of Object.entries(restrictions)) {
      if (value.length > 0) {
        for (let restriction of value) {
          const error = this.checkValidity(key, body, key, restriction);
          if (error) {
            errorObject.set([key], error);
            break;
          }
        }
      }
    }

    if (errorObject.size) {
      this.hasError = true;
      this.errors = Object.fromEntries(errorObject);
    }
  }

  checkValidity(
    fieldName: string,
    body: any,
    key: string,

    restriction: string
  ): string | null {
    // validate required
    if (restriction === 'required') {
      if (!body[key]) return 'The ' + fieldName + ' field is required';
    }
    // validate min
    else if (restriction.slice(0, 4) === 'min:') {
      const minValue: number = Number(restriction.slice(4));

      if (body[key].length < minValue)
        return (
          'The ' + fieldName + ' must be at least ' + minValue + ' characters'
        );
    }
    // validate max
    else if (restriction.slice(0, 4) === 'max:') {
      const maxValue: number = Number(restriction.slice(4));

      if (body[key].length > maxValue)
        return (
          'Field ' +
          fieldName +
          ' cannot be longer than ' +
          maxValue +
          ' characters'
        );
    }
    // validate email
    else if (restriction === 'email') {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(body[key]))
        return null;
      return 'This is not valid email';
    }
    // validate confirmed
    else if (restriction === 'confirmed') {
      if (body[key] !== body['password_confirmation'])
        return 'Confirmation password does not match';
    }

    return null;
  }

  // errorObject.set()
}