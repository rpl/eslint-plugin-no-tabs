/**
 * @fileoverview Rule to flag use of tab whitespace in source code.
 * @author Luca Greco <https://github.com/rpl>
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
  return {
    "Program": function(node) {
      var regex = /\t/,
        match,
        lines = context.getSourceLines();

      lines.forEach(function(line, i) {
        match = regex.exec(line);

        if (match) {
          context.report(node, { line: i + 1, column: match.index + 1 },
            "Tabs in whitespace chars.");
        }
      });
    }

  };
};
