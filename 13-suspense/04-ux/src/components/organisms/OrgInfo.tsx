import { VFC } from 'react';
import { Icon, Item, Label } from 'semantic-ui-react';

import { Organization } from 'domains/github';
import './OrgInfo.css';

const OrgInfo: VFC<{ org: Organization | null }> = ({ org = null }) =>
  org ? (
    <>
      <Item.Group>
        <Item>
          <Item.Image src={org.avatarUrl} size="small" />
          <Item.Content>
            <Item.Header as="a">{org.name}</Item.Header>
            <Item.Meta>{org.description}</Item.Meta>
            <Item.Extra>
              {org.location && (
                <span>
                  <Icon name="map marker alternate" />
                  {org.location}
                </span>
              )}
              {org.blog && (
                <span>
                  <Icon name="globe" />
                  <a href={org.blog} target="_blank" rel="noopener noreferrer">
                    {org.blog}
                  </a>
                </span>
              )}
              {org.isVerified && (
                <Label basic color="teal">
                  verified
                </Label>
              )}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </>
  ) : (
    <div />
  );

export default OrgInfo;
