// controllers/homeController.js
const loginUrl = [
  'https://acesso.ufca.edu.br/realms/ufca/protocol/openid-connect/auth?',
  'client_id=prea&scope=openid%20email%20profile&response_type=code&',
  'redirect_uri=https%3A%2F%2Fprea.ufca.edu.br%2Fapi%2Fauth%2Fcallback%2Fkeycloak&',
  'state=NQSwzvVzQicEzNgcLOkarYqltneF2f-05kkEXxMdO88&',
  'code_challenge=Vsekr6wVT374_OffR3pRhIuvwJCX-z1Qp0DBlyERDGU&',
  'code_challenge_method=S256'
].join('');

export default {
  index(req, res) {
    res.render('home', { loginUrl });
  }
};
