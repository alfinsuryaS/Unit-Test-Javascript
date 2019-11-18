
/* Lib Test */

// Create a group of specs (often called a suite). Calls to describe can be nested
export const describe = (callBack) => {
    for (let describeTitle in callBack) {
        let describes = callBack[describeTitle];
        describes();
    }
}

// => Define a single spec. A spec should contain one or more expectations that test the state of the code. 
export const test = (testName, callBack) => {
    try {
        callBack();
        console.log(`✓ ${testName}`)
    } catch (e) {
        console.error(`✕ ${testName}`)
        console.error(e)
    }
}


// => Explicitly mark a spec as failed.
export const fail = (expected, operator, actual) => {
    throw new Error('Failed: ' + expected + operator + actual);
}


const EMPTY_ARGS = param => {
    if (!param) return true
}

const ERROR_MESSAGE = () => {
    throw new Error("Missing arguments!")
}

// => Create an expectation for a spec.
export const expect = expected => {

    /* ----- Matchers ----- */

    // => Strict equality (===)
    const strictEqual = actual => {
        EMPTY_ARGS(actual) ? ERROR_MESSAGE() :
            (actual !== expected) ? fail(expected, ' !== ', actual) : null;
    }

    // => Strict equality (!==)
    const notStrictEqual = actual => {
        EMPTY_ARGS(actual) ? ERROR_MESSAGE() :
            (actual === expected) ? fail(expected, ' === ', actual) : null;
    }

    // => Check object length same or not
    const toHaveLength = actual => {
        EMPTY_ARGS(actual) ? ERROR_MESSAGE() :
            (actual !== Object.keys(expected).length) ? fail(expected, ' !== ', actual) : null;
    }

    return {
        strictEqual,
        notStrictEqual,
        toHaveLength
    }
}