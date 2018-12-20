// @flow
import gql from 'graphql-tag';

type ThreadTag = {
  id: string,
  title: string,
};

export type CommunityThreadTagsType = {
  threadTags: Array<ThreadTag>,
};

export default gql`
  fragment communityThreadTags on Community {
    threadTags {
      id
      title
    }
  }
`;