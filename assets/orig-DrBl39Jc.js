const l=`<section>
    <h3>Case ML-0001: Create multi-level numbered list with decimal notation:</h3>
    <p>Project Requirements</p>
    <p>Technical Specifications</p>
    <p>Implementation Plan</p>

    <h3>Case ML-0002: Add item with automatic decimal renumbering:</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
        <li>
            <p><span class="multi-level-list__marker">1. </span>Project Setup</p>
            <ol class="multi-level-list legal-list" style="list-style-type:none;">
                <li>
                    <p><span class="multi-level-list__marker">1.1. </span>Requirements gathering</p>
                </li>
                <li>
                    <p><span class="multi-level-list__marker">1.2. </span>Team assignment</p>
                </li>
            </ol>
        </li>
        <li>
            <p><span class="multi-level-list__marker">2. </span>Development</p>
        </li>
    </ol>

    <h3>Case ML-0003: Delete item with automatic decimal renumbering:</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
        <li>
            <p><span class="multi-level-list__marker">1. </span>Analysis</p>
            <ol class="multi-level-list legal-list" style="list-style-type:none;">
                <li>
                    <p><span class="multi-level-list__marker">1.1. </span>Market research</p>
                </li>
                <li>
                    <p><span class="multi-level-list__marker">1.2. </span>Competitor analysis</p>
                </li>
                <li>
                    <p><span class="multi-level-list__marker">1.3. </span>Risk assessment</p>
                </li>
            </ol>
        </li>
        <li>
            <p><span class="multi-level-list__marker">2. </span>Planning</p>
        </li>
    </ol>

    <h3>Case ML-0004: Add new sublevel to decimal numbered item:</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
        <li>
            <p><span class="multi-level-list__marker">1. </span>Documentation</p>
            <ol class="multi-level-list legal-list" style="list-style-type:none;">
                <li>
                    <p><span class="multi-level-list__marker">1.1. </span>User manual</p>
                </li>
                <li>
                    <p><span class="multi-level-list__marker">1.2. </span>Technical guide</p>
                </li>
            </ol>
        </li>
        <li>
            <p><span class="multi-level-list__marker">2. </span>Testing</p>
        </li>
    </ol>

    <h3>Case ML-0005: Promote item in decimal numbered list:</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
        <li>
            <p><span class="multi-level-list__marker">1. </span>Infrastructure</p>
            <ol class="multi-level-list legal-list" style="list-style-type:none;">
                <li>
                    <p><span class="multi-level-list__marker">1.1. </span>Server setup</p>
                </li>
                <li>
                    <p><span class="multi-level-list__marker">1.2. </span>Database configuration</p>
                    <ol class="multi-level-list legal-list" style="list-style-type:none;">
                        <li>
                            <p><span class="multi-level-list__marker">1.2.1. </span>Schema design</p>
                        </li>
                        <li>
                            <p><span class="multi-level-list__marker">1.2.2. </span>Performance tuning</p>
                        </li>
                    </ol>
                </li>
            </ol>
        </li>
        <li>
            <p><span class="multi-level-list__marker">2. </span>Security</p>
        </li>
    </ol>

    <h3>Case ML-0006: Demote item in decimal numbered list:</h3>
    <ol class="multi-level-list legal-list" style="list-style-type:none;">
        <li>
            <p><span class="multi-level-list__marker">1. </span>Training</p>
        </li>
        <li>
            <p><span class="multi-level-list__marker">2. </span>Implementation</p>
        </li>
        <li>
            <p><span class="multi-level-list__marker">3. </span>Monitoring</p>
            <ol class="multi-level-list legal-list" style="list-style-type:none;">
                <li>
                    <p><span class="multi-level-list__marker">3.1. </span>Performance metrics</p>
                </li>
            </ol>
        </li>
    </ol>
</section>`;export{l as default};
