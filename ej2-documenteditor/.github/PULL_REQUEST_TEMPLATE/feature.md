### Feature description

Clearly and concisely describe the problem or feature (this cannot be empty).

### Analysis and design

If there is an external design, link to its project documentation area.
If there is an internal discussion on the forum, provide the link.

### Solution description

Describe your code changes in detail for reviewers.

### Output screenshots

Post the output screenshots if an UI is affected or added due to this feature.

### Areas affected and ensured

List the areas are affected by your code changes.

### Jasmine Test cases

| Testcase Name | Spec file name | Test case purpose |
| --------------|----------------|-------------------|
| | | |

### Pagination & E2E Test case merge request

| Repository | Merge request link(targeted to development) |
| --------------|-----------|
| [ej2-documenteditor-test/PaginationNUnitAutomation](https://github.com/essential-studio/ej2-documenteditor-test/tree/development/PaginationNUnitAutomation) | MR link |

### Testing checklist
| Item | Comments |
| --------------|----------------|
| Is the SFDT exporting working fine. | |
| Is the Docx exporting working fine. | |
| Is the exported SFDT opening properly in DocumentEditor? | |
| Is the exported Docx opening properly in DocumentEditor? | |
| Is there any data loss in the file after saving is DocumentEditor?| If Yes, Please list the features. |

### Blazor Testing checklist
Is the feature moved to Blazor platform?
* [ ]  YES.
* [ ]  NO. Created task to track it. Share task link. 
* [ ]  NA

If YES

| Item | Comments |
| --------------|----------------|
| Is feature moved to the Blazor script also? | |
| Is feature ensured in the Blazor? | |
| ej2-blazor-source MR |<MR Link> |

### Theme changes
| Item | Comments |
| --------------|----------------|
| Is fix require theme changes?|Yes, PR link <https://github.com/essential-studio/ej2-theme-studio>|

### Additional checklist
| Checklist | Comments |
| ------------|-------|
| Did you run the automation against your implementation? ||
| Is there any API name change? | If yes, Provide the API review task. |
| Is there any existing behavior change of other features due to this code change?||
| Did you record this case in the unit test or UI test?||
