// src/pages/AdminDashboard.jsx
import React, { useState } from 'react';
import Card from './Card';
import Typography from './Typography';
import Button, { ButtonVariants } from './Button';
import Alert from './Alert';
import Input from './Input';
import Select from './Select';
import Avatar from './Avatar';
import { Users, Target, Shield, AlertTriangle } from 'lucide-react';
import Container from './Container';
import Section from './Section';

const AdminDashboard = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [formData, setFormData] = useState({
    agentCode: '',
    missionType: '',
    priority: ''
  });

  // Mock data
  const stats = [
    { icon: Users, label: 'Active Agents', value: '47', color: 'var(--clr-primary)' },
    { icon: Target, label: 'Ongoing Missions', value: '12', color: 'var(--clr-btn-hire)' },
    { icon: Shield, label: 'Success Rate', value: '98%', color: 'var(--clr-btn-warning)' },
    { icon: AlertTriangle, label: 'High Risk Ops', value: '3', color: 'var(--clr-btn-xxxxx)' }
  ];

  const recentActivity = [
    { id: 1, agent: 'Silver Bald', action: 'Mission completed', location: 'Berlin', status: 'success' },
    { id: 2, agent: 'Red Fox', action: 'Extraction required', location: 'Moscow', status: 'warning' },
    { id: 3, agent: 'Night Owl', action: 'Target acquired', location: 'Tokyo', status: 'info' },
    { id: 4, agent: 'Ghost', action: 'Cover compromised', location: 'London', status: 'danger' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="admin-dashboard">
      <Container>
        {/* Header */}
        <Section>
          <div className="admin-header">
            <div>
              <Typography variant="h1">Operations Command Center</Typography>
              <Typography variant="caption">
                Last sync: {new Date().toLocaleString()}
              </Typography>
            </div>
            <Button 
              text="Emergency Protocol" 
              variant={ButtonVariants.WARNING}
              onClick={() => window.alert('Emergency protocol activated')}
            />
          </div>
        </Section>

        {/* Stats Grid */}
        <Section>
          <div className="stats-grid">
            {stats.map(({ icon: Icon, label, value, color }) => (
              <Card key={label} variant="stat">
                <div className="stat-card">
                  <Icon size={24} style={{ color }} />
                  <div>
                    <Typography variant="h2">{value}</Typography>
                    <Typography variant="caption">{label}</Typography>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        {/* Main Content Grid */}
        <div className="admin-grid">
          {/* Quick Mission Assignment */}
          <Section title="Quick Mission Assignment">
            <Card>
              <form onSubmit={handleSubmit} className="admin-form">
                <Input 
                  label="Agent Code"
                  placeholder="Enter agent code"
                  value={formData.agentCode}
                  onChange={(e) => setFormData({...formData, agentCode: e.target.value})}
                  required
                />
                
                <Select 
                  label="Mission Type"
                  value={formData.missionType}
                  onChange={(e) => setFormData({...formData, missionType: e.target.value})}
                  options={[
                    { value: '', label: 'Select mission type' },
                    { value: 'surveillance', label: 'Surveillance' },
                    { value: 'extraction', label: 'Extraction' },
                    { value: 'elimination', label: 'Elimination' },
                    { value: 'infiltration', label: 'Infiltration' }
                  ]}
                  required
                />

                <Select 
                  label="Priority Level"
                  value={formData.priority}
                  onChange={(e) => setFormData({...formData, priority: e.target.value})}
                  options={[
                    { value: '', label: 'Select priority' },
                    { value: 'low', label: 'Low' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'high', label: 'High' },
                    { value: 'critical', label: 'Critical' }
                  ]}
                  required
                />

                <Button 
                  text="Assign Mission" 
                  variant={ButtonVariants.PRIMARY}
                  type="submit"
                />
              </form>
            </Card>
          </Section>

          {/* Recent Activity */}
          <Section title="Recent Activity">
            <Card>
              <div className="activity-list">
                {recentActivity.map(({ id, agent, action, location, status }) => (
                  <div key={id} className="activity-item">
                    <Avatar 
                      shape="rounded" 
                      url={`https://picsum.photos/seed/${id}/48`}
                      size={48}
                    />
                    <div className="activity-details">
                      <Typography variant="body">
                        <strong>{agent}</strong> - {action}
                      </Typography>
                      <Typography variant="caption">{location}</Typography>
                    </div>
                    <span className={`status-badge status-badge--${status}`}>
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </Section>
        </div>

        {/* Alerts */}
        {showAlert && (
          <div style={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 100 }}>
            <Alert type="success" onClose={() => setShowAlert(false)}>
              Mission assigned successfully!
            </Alert>
          </div>
        )}

        {/* System Status */}
        <Section title="System Status">
          <div className="system-status">
            <Alert type="info">
              All systems operational. Secure channels active.
            </Alert>
          </div>
        </Section>
      </Container>
    </div>
  );
};

export default AdminDashboard;