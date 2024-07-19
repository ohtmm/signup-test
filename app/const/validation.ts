const validation: Validation = {
  id: {
    regex: /^[a-zA-Z0-9]{5,15}$/,
    messages: {
      required: '값을 입력해주세요.',
      minLength: '최소 5자 이상 입력해주세요.',
      maxLength: '최대 15자 이하로 입력해주세요.',
      invalidChars: '영문과 숫자만 입력해주세요.',
    },
  },
  name: {
    regex: /^.+$/,
    messages: {
      required: '값을 입력해주세요.',
    },
  },
  email: {
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    messages: {
      format: '이메일 형식에 맞게 입력해주세요.',
    },
  },
  password: {
    regex: /^[a-zA-Z0-9]{8,20}$/,
    messages: {
      required: '값을 입력해주세요.',
      minLength: '최소 8자 이상 입력해주세요.',
      maxLength: '최대 20자 이하로 입력해주세요.',
      invalidChars: '영문과 숫자만 입력해주세요.',
    },
  },
  'password-confirm': {
    regex: /^[a-zA-Z0-9]{8,20}$/,
    messages: {
      required: '값을 입력해주세요.',
      minLength: '최소 8자 이상 입력해주세요.',
      maxLength: '최대 20자 이하로 입력해주세요.',
      match: '비밀번호가 일치하지 않습니다.',
      invalidChars: '영문과 숫자만 입력해주세요.',
    },
  },
};

export default validation;
