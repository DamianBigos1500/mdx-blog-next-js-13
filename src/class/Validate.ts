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
          const error = this.checkValidity(key, body[key], restriction);
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
    value: string,
    restriction: string
  ): string | null {
    if (restriction === 'required') {
      if (!value) return 'The ' + fieldName + ' field is required';
    } else if (restriction.slice(0, 4) === 'min:') {
      const minValue: number = Number(restriction.slice(4));

      if (value.length < minValue)
        return (
          'The ' + fieldName + ' must be at least ' + minValue + ' characters'
        );
    } else if (restriction.slice(0, 4) === 'max:') {
      const maxValue: number = Number(restriction.slice(4));

      if (value.length > maxValue)
        return (
          'Field ' +
          fieldName +
          ' cannot be longer than ' +
          maxValue +
          ' characters'
        );
    }

    return null;
  }

  // errorObject.set()
}
