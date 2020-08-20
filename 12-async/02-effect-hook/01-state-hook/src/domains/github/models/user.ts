export type User = {
  login: string;
  id: number;
  nodeId: string;
  avatarUrl: string;
  gravatarId: string;
  url: string;
  htmlUrl: string;
  followersUrl: string;
  followingUrl: string;
  gistsUrl: string;
  starredUrl: string;
  subscriptionsUrl: string;
  organizationsUrl: string;
  reposUrl: string;
  eventsUrl: string;
  receivedEventsUrl: string;
  type: string;
  siteAdmin: boolean;
};

const isUser = (arg: unknown): arg is User => {
  const u = arg as User;

  return (
    typeof u?.login === 'string' &&
    typeof u?.id === 'number' &&
    typeof u?.nodeId === 'string' &&
    typeof u?.avatarUrl === 'string' &&
    typeof u?.gravatarId === 'string' &&
    typeof u?.url === 'string' &&
    typeof u?.htmlUrl === 'string' &&
    typeof u?.followersUrl === 'string' &&
    typeof u?.followingUrl === 'string' &&
    typeof u?.gistsUrl === 'string' &&
    typeof u?.starredUrl === 'string' &&
    typeof u?.subscriptionsUrl === 'string' &&
    typeof u?.organizationsUrl === 'string' &&
    typeof u?.reposUrl === 'string' &&
    typeof u?.eventsUrl === 'string' &&
    typeof u?.receivedEventsUrl === 'string' &&
    typeof u?.type === 'string' &&
    typeof u?.siteAdmin === 'boolean'
  );
};

const isUsers = (args: unknown[]): args is User[] =>
  !args.some((arg) => !isUser(arg));

export { isUser, isUsers };
