<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>Sitemap - OfflineClean</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            max-width: 1200px;
            margin: 0 auto;
            padding: 40px 20px;
            background: #0a0a0a;
            color: #fff;
          }
          h1 {
            font-size: 28px;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #45CDFB 0%, #0C6EC7 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          p.desc {
            color: #888;
            margin-bottom: 30px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background: #111;
            border-radius: 12px;
            overflow: hidden;
          }
          th {
            background: #1a1a1a;
            padding: 16px;
            text-align: left;
            font-weight: 600;
            color: #888;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          td {
            padding: 14px 16px;
            border-top: 1px solid #222;
          }
          a {
            color: #45CDFB;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority {
            display: inline-block;
            padding: 4px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
          }
          .priority-high {
            background: rgba(76, 217, 100, 0.2);
            color: #4CD964;
          }
          .priority-medium {
            background: rgba(255, 149, 0, 0.2);
            color: #FF9500;
          }
          .priority-low {
            background: rgba(142, 142, 147, 0.2);
            color: #8E8E93;
          }
          .lang-badge {
            display: inline-block;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 11px;
            font-weight: 600;
            margin-left: 8px;
          }
          .lang-en {
            background: rgba(0, 122, 255, 0.2);
            color: #007AFF;
          }
          .lang-tr {
            background: rgba(255, 59, 48, 0.2);
            color: #FF3B30;
          }
        </style>
      </head>
      <body>
        <h1>OfflineClean Sitemap</h1>
        <p class="desc">This sitemap contains <xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</p>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Change Freq</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td>
                  <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  <xsl:if test="contains(sitemap:loc, '/en')">
                    <span class="lang-badge lang-en">EN</span>
                  </xsl:if>
                  <xsl:if test="contains(sitemap:loc, '/tr')">
                    <span class="lang-badge lang-tr">TR</span>
                  </xsl:if>
                </td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
                <td><xsl:value-of select="sitemap:changefreq"/></td>
                <td>
                  <xsl:choose>
                    <xsl:when test="sitemap:priority &gt;= 0.8">
                      <span class="priority priority-high"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:when>
                    <xsl:when test="sitemap:priority &gt;= 0.6">
                      <span class="priority priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:when>
                    <xsl:otherwise>
                      <span class="priority priority-low"><xsl:value-of select="sitemap:priority"/></span>
                    </xsl:otherwise>
                  </xsl:choose>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
