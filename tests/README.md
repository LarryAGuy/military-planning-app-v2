# Military Planning App V2 - Testing Framework

## Overview

This comprehensive testing framework ensures the Military Planning App V2 meets all military standards, security requirements, and performance benchmarks. The framework includes unit tests, integration tests, end-to-end tests, performance tests, and military standards validation.

## Test Categories

### 1. Unit Tests (`/tests/unit/`)
Tests individual components and functions in isolation.

**Files:**
- `EventBus.test.js` - Event system functionality
- `PluginManager.test.js` - Plugin management system
- `SecurityManager.test.js` - Security controls and validation
- `ValidationUtils.test.js` - Data validation utilities
- `CryptoUtils.test.js` - Cryptographic functions

**Coverage Target:** 90%

### 2. Integration Tests (`/tests/integration/`)
Tests component interactions and system integration.

**Files:**
- `AppCore.test.js` - Main application core integration
- `PluginIntegration.test.js` - Plugin system integration
- `ComponentCommunication.test.js` - Inter-component communication
- `DataFlow.test.js` - Data flow between components

**Coverage Target:** 80%

### 3. End-to-End Tests (`/tests/e2e/`)
Tests complete user workflows and scenarios.

**Files:**
- `UserWorkflows.test.js` - Complete user workflows
- `OPORDCreation.test.js` - OPORD creation process
- `MDMPProcess.test.js` - MDMP workflow testing
- `ClassificationHandling.test.js` - Classification management

**Coverage Target:** 70%

### 4. Performance Tests (`/tests/performance/`)
Tests application performance and resource usage.

**Files:**
- `Performance.test.js` - General performance benchmarks
- `LoadTesting.test.js` - Load and stress testing
- `MemoryUsage.test.js` - Memory usage optimization
- `NetworkPerformance.test.js` - Network request optimization

**Benchmarks:**
- App initialization: < 2 seconds
- Plugin loading: < 1 second
- OPORD creation: < 500ms
- Component rendering: < 100ms
- Event processing: < 1 second (10k events)
- Memory usage: < 50MB increase

### 5. Military Standards Validation (`/tests/validation/`)
Tests compliance with military standards and regulations.

**Files:**
- `MilitaryStandards.test.js` - FM 5-0 and military format compliance
- `SecurityCompliance.test.js` - DoD security requirements
- `AccessibilityCompliance.test.js` - Section 508 compliance
- `DataRetention.test.js` - Records management compliance

**Standards:**
- FM 5-0 Operations Process
- NATO Standardization (STANAG)
- Section 508 Accessibility
- FISMA Security Controls
- DoD 5015.02 Records Management

## Running Tests

### Prerequisites
- Node.js 18+ or modern browser with ES6 module support
- Military Planning App V2 development environment

### Command Line Usage

```bash
# Run all tests
npm test

# Run specific test category
npm run test:unit
npm run test:integration
npm run test:e2e
npm run test:performance
npm run test:validation

# Run with coverage
npm run test:coverage

# Run with verbose output
npm run test:verbose
```

### Browser Usage

1. Open `test-suite.html` in a modern browser
2. Click "Run All Tests" or select specific test categories
3. View results in real-time with detailed reporting

### Test Configuration

Tests are configured through `test.config.js`:

```javascript
import { TestConfig } from './tests/test.config.js';

// Access specific configurations
const unitConfig = TestConfig.categories.unit;
const militaryStandards = TestConfig.military;
```

## Military-Specific Testing

### Classification Testing
Tests proper handling of classification levels and caveats:

```javascript
// Valid classification levels
['UNCLASSIFIED', 'CONFIDENTIAL', 'SECRET', 'TOP SECRET']

// Valid caveats
['NOFORN', 'REL TO USA, FVEY', 'SI', 'TK', 'HCS', 'ORCON']

// Network authorization matrix
{
  'NIPR': ['UNCLASSIFIED'],
  'SIPR': ['UNCLASSIFIED', 'CONFIDENTIAL', 'SECRET'],
  'JWICS': ['UNCLASSIFIED', 'CONFIDENTIAL', 'SECRET', 'TOP SECRET']
}
```

### OPORD Format Validation
Tests compliance with FM 5-0 format requirements:

```javascript
// Required sections
['situation', 'mission', 'execution', 'sustainment', 'command']

// Required annexes (FM 5-0 Nov 2024)
['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'T']

// DTG format validation
/^([0-3][0-9])([0-2][0-9])([0-5][0-9])Z\s([A-Z]{3})\s([0-9]{2})$/
```

### MDMP Process Validation
Tests Military Decision Making Process compliance:

```javascript
// Required MDMP steps
[
  'Receipt of Mission',
  'Mission Analysis', 
  'COA Development',
  'COA Analysis',
  'COA Comparison',
  'COA Approval',
  'Orders Production'
]
```

### Unit Designation Validation
Tests proper military unit designation formats:

```javascript
// Valid patterns
/^([A-Z]\/)?[0-9]+-[0-9]+\s[A-Z]+(\s[A-Z]+)?$/

// Examples
'1-101 AVN BN'
'A/1-101 AVN'
'2-3 IN'
'1st BCT'
```

## Test Framework Features

### Custom Test Runner
- Built-in assertion library
- Military-specific assertions
- Performance benchmarking
- Coverage reporting
- Real-time progress tracking

### Mock Data and Fixtures
- Sample OPORD documents
- MDMP process examples
- Classification test cases
- Unit designation samples
- User role definitions

### Security Testing
- Authentication validation
- Authorization checks
- Data encryption verification
- Audit logging validation
- Session management testing

### Accessibility Testing
- Section 508 compliance
- WCAG 2.1 AA standards
- Keyboard navigation
- Screen reader compatibility
- Color contrast validation

## Continuous Integration

### GitHub Actions Workflow
```yaml
name: Military Planning App V2 Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm install
      - run: npm run test:all
      - run: npm run test:coverage
```

### Test Reports
- HTML reports with military theme
- JSON results for CI/CD integration
- XML reports for enterprise tools
- Performance metrics dashboard
- Coverage reports with thresholds

## Best Practices

### Writing Tests
1. Use descriptive test names
2. Follow AAA pattern (Arrange, Act, Assert)
3. Test both positive and negative scenarios
4. Include military-specific edge cases
5. Validate security requirements
6. Test accessibility compliance

### Military Considerations
1. Test all classification levels
2. Validate military format compliance
3. Test network authorization rules
4. Verify audit logging
5. Test data retention policies
6. Validate user role permissions

### Performance Testing
1. Set realistic benchmarks
2. Test under load conditions
3. Monitor memory usage
4. Validate network efficiency
5. Test concurrent operations
6. Measure user experience metrics

## Troubleshooting

### Common Issues
1. **Module Import Errors**: Ensure ES6 modules are supported
2. **Classification Validation Failures**: Check network authorization matrix
3. **Performance Test Timeouts**: Adjust timeout values in config
4. **Mock Data Issues**: Verify fixture files are accessible
5. **Security Test Failures**: Check authentication/authorization setup

### Debug Mode
Enable verbose logging for detailed test execution information:

```javascript
const results = await testRunner.run({ 
  verbose: true, 
  failFast: false 
});
```

## Contributing

### Adding New Tests
1. Create test file in appropriate category directory
2. Import test framework: `import { describe, it, expect } from '../TestRunner.js'`
3. Follow military naming conventions
4. Add test file to configuration
5. Update documentation

### Military Standards Updates
1. Update `test.config.js` with new standards
2. Add validation tests for new requirements
3. Update mock data and fixtures
4. Verify compliance with existing tests
5. Document changes in README

## Security Considerations

### Test Data Classification
- All test data is UNCLASSIFIED
- No real classified information in tests
- Mock data follows military formats
- Sanitized examples only

### Test Environment Security
- Tests run in isolated environment
- No network access to classified systems
- Local execution only
- Audit logging for test runs

## Support

For questions or issues with the testing framework:

1. Check this documentation
2. Review test configuration
3. Examine existing test examples
4. Contact development team
5. Submit issue with detailed description

---

**Classification:** UNCLASSIFIED  
**Distribution:** Approved for public release  
**Version:** 2.0.0  
**Last Updated:** July 2025
