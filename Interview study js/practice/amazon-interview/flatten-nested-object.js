//Flatten object
const root = {
  test: {
    test1: {
      test2: 2,
      test3: {
        test4: 4,
      },
    },
  },
  nest: {
    nest2: {
      nest3: 3,
    },
    nest4: {},
  },
};

const flattenObj = (obj) => {
  const isObj = (temp) => {
    return (
      typeof temp === "object" && temp !== null && Object.keys(temp).length
    );
  };

  if (!isObj(obj)) {
    return obj;
  }

  const stack = [obj];
  //what if 2 keys are the same?
  const answer = {};

  while (stack.length) {
    const current = stack.pop();

    for (let key of Object.keys(current)) {
      const value = current[key];
      if (!isObj(value)) {
        answer[key] = value;
        continue;
      }

      stack.push(value);
    }
  }
  return answer;
};
