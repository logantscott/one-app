//user info
export const fetchUserInfo = () => {
  return fetch('https://api.github.com/users/:username')
    .then(res => res.json())
    .then(json => json.results);
};

//all repos
export const fetchRepos = () => {
  return fetch('https://api.github.com/users/:username/repos')
    .then(res => res.json())
    .then(json => json.results);
};

//all PRs on a user repo
export const fetchPRs = () => {
  return fetch('https://api.github.com/repos/:owner/:repo/pulls')
    .then(res => res.json())
    .then(json => json.results);
};

//all issues on a user repo
export const fetchIssues = () => {
  return fetch('https://api.github.com/repos/:owner/:repo/issues')
    .then(res => res.json())
    .then(json => json.results);
};
