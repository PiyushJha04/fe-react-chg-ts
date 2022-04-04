const GENDER = 'gender';
const DOB = 'date_of_birth';

const formatFieldsData = (data) => {
  const originalData = data;
  const formattedData =
    !!originalData &&
    originalData.fields.map((element) => {
      const elem = element;
      if (
        typeof elem === 'object' &&
        elem !== null &&
        typeof elem !== 'function'
      ) {
        return elem;
      } else if (typeof elem == 'string' || elem instanceof String) {
        switch (elem) {
          case GENDER:
            return {
              name: elem,
              type: 'select',
              required: true,
              options: ['Male', 'Female', 'Undeclared'],
            };
          case DOB:
            return {
              name: elem,
              type: 'date',
              required: true,
            };
          default:
            return {
              name: elem,
              type: 'text',
              required: true,
            };
        }
      }
    });
  return formattedData;
};

export default formatFieldsData;
