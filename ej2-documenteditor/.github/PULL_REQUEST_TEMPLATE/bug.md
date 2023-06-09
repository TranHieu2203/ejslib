### Bug description

Clearly and concisely describe the problem or feature (this cannot be empty).

### Root cause

Briefly describe the root cause and analysis of the problem.
If there is an internal discussion on the forum, provide the link.
#### Reason for not identifying earlier

Find how it was missed in our earlier testing and development by analysing the below checklist. This will help prevent similar mistakes in the future. 

* Guidelines/documents are not followed
* Common guidelines / Core team guideline
* Specification document
* Requirement document
* Guidelines/documents are not given

### Reason:
Mention any one or more reasons from the above points.

### Action taken:
What action did you take to avoid this in future?

### Related areas:
Is there any other related areas also to be addressed?

### Is it a breaking issue?

If it is a breaking issue, provide the commit detail which caused this break.

### Solution description

Describe your code changes in detail for reviewers.

### Output screenshots

Post the output screenshots if an UI is affected or added due to this bug.

### Areas affected and ensured

List the areas affected by your code changes.

### Manual Testing checklist
| Item | Comments |
| --------------|----------------|
| Is the SFDT exporting working fine. | |
| Is the Docx exporting working fine. | |
| Is the exported SFDT opening properly in DocumentEditor? | |
| Is the exported Docx opening properly in DocumentEditor? | |
| Is there any data loss in the file after saving is DocumentEditor?| If Yes, Please list the features. |

### Theme changes
| Item | Comments |
| --------------|----------------|
| Is fix require theme changes?|Yes, PR link <https://github.com/essential-studio/ej2-theme-studio>|

### Blazor Testing checklist
| Item | Comments |
| --------------|----------------|
| Is fix moved to the Blazor script also? | |
| Is fix ensured in the Blazor? | |

### Automation

#### Jasmine Test cases

| Testcase Name | Spec file name | Test case purpose |
| --------------|----------------|-------------------|
| | | |

#### Pagination Test case merge request
| Repository | Merge request link(targeted to development) |
| --------------|-----------|
| [ej2-documenteditor-test/PaginationNUnitAutomation](https://github.com/essential-studio/ej2-documenteditor-test/tree/development/PaginationNUnitAutomation) | MR link |

#### E2E Test case merge request
| Repository | Merge request link(targeted to development) |
| --------------|-----------|
| [ej2-documenteditor-e2e](https://github.com/essential-studio/ej2-documenteditor-e2e) | MR link |

#### Testing results

| Test | Result |
| -- | -- |
Jasmine test |  |
| Pagination Test (MVC, Core and Blazor) | MVC -  <br/> Core -   <br/> Blazor -  |
| E2E Test |  |

### Additional checklist
| Checklist | Comments |
| ------------|-------|
| Did you run the automation against your implementation? ||
| Is there any API name change? | If yes, Provide the API review task. |
| Is there any existing behavior change of other features due to this code change?||
