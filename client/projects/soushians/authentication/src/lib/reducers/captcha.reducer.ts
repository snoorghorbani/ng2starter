import {
        CaptchaAction,
        TOKEN_REQUESTED,
        TOKEN_RECEIVED,
        CAPTCHA_ENTERED,
        CLEAR_CAPTCHA,
        NEW_CAPTCHA
} from '../actions';
import { CaptchaModel } from '../models';


export interface State {
        captcha: CaptchaModel;
}

export const initialState: State = {
        captcha: new CaptchaModel()
};

export function CaptchaReducer(state = initialState, action: CaptchaAction): State {
        switch (action.type) {
                case NEW_CAPTCHA: {
                        return state
                }

                case TOKEN_REQUESTED: {
                        return initialState
                }

                case TOKEN_RECEIVED:
                        {
                                return {
                                        ...state,
                                        captcha: {
                                                ...state.captcha,
                                                CaptchaImageUrl: 'http://wifi.shatel.ir/api/v1/captcha/image?token=' + action.payload.Token,
                                                Token: action.payload
                                        }
                                };
                        }
                case CAPTCHA_ENTERED:
                        {
                                return {
                                        ...state,
                                        captcha: {
                                                ...state.captcha,
                                                Captcha: action.payload
                                        }
                                };
                        }
                case CLEAR_CAPTCHA:
                        {
                                return initialState;
                        }

                default: {
                        return state;
                }
        }
}


export const getCaptcha = (state: State) => state.captcha;