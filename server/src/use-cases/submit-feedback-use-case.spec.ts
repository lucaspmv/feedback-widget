import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const submitFeedback = new SubmitFeedbackUseCase(
  { create: async () => {} },
  { sendMail: async () => {}}
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'Example comment',
      screenshot: 'data:/image/png;base64,3421342142314231'
    })).resolves.not.toThrow();
  });

  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Example comment',
      screenshot: 'data:/image/png;base64,3421342142314231'
    })).resolves.not.toThrow();
  });

  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:/image/png;base64,3421342142314231'
    })).resolves.not.toThrow();
  });

  it('should not be able to submit feedback an invalid screenshot', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'Example comment',
      screenshot: '3421342142314231'
    })).resolves.not.toThrow();
  });
})