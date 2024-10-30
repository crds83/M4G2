import React from 'react';
import GradientButton from './GradientButton';

const App: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Gradient Buttons Demo</h1>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <GradientButton label="Primary Button" type="primary" onClick={() => alert('Primary Clicked')} />
        <GradientButton label="Secondary Button" type="secondary" onClick={() => alert('Secondary Clicked')} />
        <GradientButton label="Danger Button" type="danger" onClick={() => alert('Danger Clicked')} />
        <GradientButton label="Success Button" type="success" onClick={() => alert('Success Clicked')} />
        <GradientButton label="Warning Button" type="warning" onClick={() => alert('Warning Clicked')} />

        {/* Demonstrate size options */}
        <GradientButton label="Small Primary" type="primary" size="small" />
        <GradientButton label="Medium Success" type="success" size="medium" />
        <GradientButton label="Large Danger" type="danger" size="large" disabled />
      </div>
    </div>
  );
};

export default App;
