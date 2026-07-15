function narrativePanel(kickerLabel, innerHtml, opts = {}){
    const stamp = opts.stamp || '';
    const extraClass = opts.className || '';
    const idAttr = opts.id ? ` id="${escAttr(opts.id)}"` : '';
    const dataSearch = opts.dataSearchKind != null
        ? ` data-search-kind="${escAttr(opts.dataSearchKind)}" data-search-idx="${Number(opts.dataSearchIdx)}"`
        : '';
    return `<div class="assunto-narrative narrative-panel ${extraClass}"${idAttr}${dataSearch}>
      <div class="assunto-narrative-accent" aria-hidden="true"></div>
      <div class="assunto-narrative-body">
        <div class="assunto-narrative-kicker-row">
          <div class="assunto-narrative-kicker">${NARRATIVE_KICKER_ICON} ${escHtml(kickerLabel)}</div>
          ${stamp}
        </div>
        <div class="text-box text-box--assunto text-box--narrative">${innerHtml}</div>
      </div>
    </div>`;
}

function noteKickerLabel(stateKey){
    const map = {
        detalhesTecnicos: 'Detalhe técnico',
        reprocessamentoItens: 'Reprocessamento',
        erroItens: 'Tratamento de erro',
        validacaoItens: 'Validação',
    };
    return map[stateKey] || 'Procedimento';
}

function passoTituloBadge(titulo){
    const t = (titulo || '').trim();
    if (!t) return '<span class="badge badge-passo-titulo">Passo sem título</span>';
    return `<span class="badge badge-passo-titulo">${escHtml(t)}</span>`;
}

function execParametroBadge(value){
    const t = (value || '').trim();
    if (!t) return '<span style="color:var(--text-muted)">—</span>';
    return `<span class="badge badge-regra-campo badge-regra-campo--origem">${escHtml(t)}</span>`;
}
function execParametroValorBadge(value){
    const t = (value || '').trim();
    if (!t) return '<span style="color:var(--text-muted)">—</span>';
    