declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    domain: import("redux").CombinedState<{
        registrationForm: import("src/domian/registrationForm").IRegistrationFormInfo;
    }>;
}>, import("redux").AnyAction>;
export default rootReducer;
