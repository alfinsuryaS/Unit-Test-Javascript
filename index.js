
/* Lib Test */

// Create a group of specs (often called a suite). Calls to describe can be nested
const describe = callBack => {
    for (let describeTitle in callBack) {
        let describes = callBack[describeTitle];
        describes();
    }
}

// => Define a single spec. A spec should contain one or more expectations that test the state of the code. 
const test = async (testName, callBack) => {
    try {
        await callBack();
        console.log(`✓ ${testName}`)
    } catch (e) {
        console.error(`✕ ${testName}`)
        console.error(e)
    }
}


// => Explicitly mark a spec as failed.
const fail = (expected, operator, actual) => {
    throw new Error('Failed: ' + expected + operator + actual);
}


// => Mocking function
const mock = (impl = () => { }) => {
    const mockFn = (...args) => {
        mockFn.mock.calls.push(args)
        return impl(...args)
    }
    mockFn.mock = { calls: [] }
    mockFn.mockImplementation = newImpl => (impl = newImpl)
    return mockFn
}


// => Create an expectation for a spec.
const expect = expected => {

    /* Error Notice */
    const EMPTY_ARGS = param => {
        if (!param) return true
    }

    const ERROR_MESSAGE = () => {
        throw new Error("Missing arguments!")
    }


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
            (actual !== Object.keys(expected).length) ?
                fail(`Your length is: ${expected.length}`, ' !== ', actual) : null;
    }

    return {
        strictEqual,
        notStrictEqual,
        toHaveLength
    }
}


/* Make globally */
module.exports = {
    describe,
    test,
    expect,
    mock
}