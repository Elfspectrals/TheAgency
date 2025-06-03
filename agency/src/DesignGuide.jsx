// src/pages/DesignGuide.jsx
import React from 'react';
import Button, { ButtonVariants } from './Button';
import Avatar from './Avatar';
import Location from './Location';
import Modal from './Modal';
import Dropdown from './Dropdown';
import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';
import Card from './Card';
import Alert from './Alert';
import Typography from './Typography';
import Container from './Container';
import Section from './Section';

const DesignGuide = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [alertVisible, setAlertVisible] = React.useState(true);

  return (
    <div className="design-guide">
      <Container>
        <Section>
          <Typography variant="h1">Agency Design System</Typography>
          <Typography variant="subtitle">
            Complete component library for covert operations
          </Typography>
        </Section>

        {/* Typography Section */}
        <Section title="Typography">
          <div className="component-demo">
            <Typography variant="h1">Heading 1 - Mission Brief</Typography>
            <Typography variant="h2">Heading 2 - Operation Details</Typography>
            <Typography variant="h3">Heading 3 - Agent Profile</Typography>
            <Typography variant="body">
              Body text - Standard mission briefing content with all necessary details.
            </Typography>
            <Typography variant="caption">
              Caption - Classified information notice
            </Typography>
          </div>
        </Section>

        {/* Buttons Section */}
        <Section title="Buttons">
          <div className="component-demo component-demo--inline">
            <Button text="Primary Action" variant={ButtonVariants.PRIMARY} />
            <Button text="Warning" variant={ButtonVariants.WARNING} />
            <Button text="Hire Agent" variant={ButtonVariants.HIRE} />
            <Button text="Special Op" variant={ButtonVariants.XXXXX} />
          </div>
        </Section>

        {/* Form Elements */}
        <Section title="Form Elements">
          <div className="component-demo">
            <Input label="Agent Codename" placeholder="Enter codename..." />
            <Input label="Mission Location" type="text" value="Paris, FR" />
            <Input label="Password" type="password" placeholder="Top secret" />
            
            <Select label="Risk Level" options={[
              { value: '', label: 'Select risk level' },
              { value: 'low', label: 'Low Risk' },
              { value: 'medium', label: 'Medium Risk' },
              { value: 'high', label: 'High Risk' },
              { value: 'critical', label: 'Critical' }
            ]} />
            
            <Checkbox label="Accept mission terms" />
            <Checkbox label="Require extraction plan" defaultChecked />
          </div>
        </Section>

        {/* Avatar & Location */}
        <Section title="Avatar & Location">
          <div className="component-demo component-demo--inline">
            <Avatar 
              shape="square" 
              url="https://picsum.photos/seed/47/100" 
              size={64} 
            />
            <Avatar 
              shape="rounded" 
              url="https://picsum.photos/seed/13/100" 
              size={64} 
            />
            <Location text="Berlin, DE" />
            <Location text="Tokyo, JP" />
          </div>
        </Section>

        {/* Cards */}
        <Section title="Cards">
          <div className="component-demo component-demo--grid">
            <Card>
              <Typography variant="h3">Basic Card</Typography>
              <Typography variant="body">
                Simple card component for content grouping.
              </Typography>
            </Card>
            
            <Card variant="highlighted">
              <Typography variant="h3">Highlighted Card</Typography>
              <Typography variant="body">
                For important information or featured content.
              </Typography>
            </Card>
          </div>
        </Section>

        {/* Alerts */}
        <Section title="Alerts">
          <div className="component-demo">
            {alertVisible && (
              <Alert 
                type="info" 
                onClose={() => setAlertVisible(false)}
              >
                Information: New intelligence available
              </Alert>
            )}
            <Alert type="success">Mission completed successfully</Alert>
            <Alert type="warning">Agent requires immediate extraction</Alert>
            <Alert type="danger">Security breach detected</Alert>
          </div>
        </Section>

        {/* Modal */}
        <Section title="Modal">
          <div className="component-demo">
            <Button 
              text="Open Modal Demo" 
              onClick={() => setModalOpen(true)}
              variant={ButtonVariants.PRIMARY}
            />
            
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
              <Typography variant="h2">Mission Briefing</Typography>
              <Typography variant="body">
                This is a modal window demonstration. It can contain any content
                including forms, images, or detailed information.
              </Typography>
              <div style={{ marginTop: '1.5rem' }}>
                <Button 
                  text="Accept Mission" 
                  variant={ButtonVariants.HIRE}
                  onClick={() => setModalOpen(false)}
                />
              </div>
            </Modal>
          </div>
        </Section>

        {/* Dropdown */}
        <Section title="Navigation Components">
          <div className="component-demo component-demo--inline">
            <Dropdown label="Operations">
              <Dropdown.Item>Surveillance</Dropdown.Item>
              <Dropdown.Item>Extraction</Dropdown.Item>
              <Dropdown.Item>Elimination</Dropdown.Item>
            </Dropdown>
          </div>
        </Section>

        {/* Color Palette */}
        <Section title="Color Palette">
          <div className="color-grid">
            <div className="color-swatch" style={{ background: 'var(--clr-primary)' }}>
              <span>Primary</span>
            </div>
            <div className="color-swatch" style={{ background: 'var(--clr-bg)' }}>
              <span>Background</span>
            </div>
            <div className="color-swatch" style={{ background: 'var(--clr-surface)' }}>
              <span>Surface</span>
            </div>
            <div className="color-swatch" style={{ background: 'var(--clr-text)' }}>
              <span>Text</span>
            </div>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default DesignGuide;