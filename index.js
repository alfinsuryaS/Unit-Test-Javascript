
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


// => Create an expectation for a spec.
export const expect = expected => {

    /* ----- Matchers ----- */

    // => Strict equality (===)
    const toBe = actual => {
        if (actual !== expected) fail(expected, ' !== ', actual)
    }

    // => Strict equality (!==)
    const notToBe = actual => {
        if (actual === expected) fail(expected, ' === ', actual)
    }

    // => Nilai actual lebih besar dari nilai expected
    const toBeGreaterThan = actual => {
        if (actual > expected) fail(expected, ' > ', actual)
    }

    // => Check object length same or not
    const toHaveLength = actual => {
        if (actual !== Object.keys(expected).length) fail(expected, ' !== ', actual)
    }

    return {
        toBe,
        notToBe,
        toBeGreaterThan,
        toHaveLength
    }
}